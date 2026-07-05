import prisma from "../config/prisma";
import { AppointmentStatus } from "@prisma/client";
import { ApiError } from "../utils/ApiError";
import {
  CreateAppointmentInput,
  RescheduleAppointmentInput,
} from "../validations/appointment.validation";

class AppointmentService {
async create(data: CreateAppointmentInput) {
  const doctor = await prisma.doctor.findUnique({
    where: {
      id: data.doctorId,
    },
    include: {
      workingHours: true,
      leaves: true,
    },
  });

  if (!doctor) {
    throw new ApiError(404, "Doctor not found.");
  }

  const patient = await prisma.patient.findUnique({
    where: {
      id: data.patientId,
    },
  });

  if (!patient) {
    throw new ApiError(404, "Patient not found.");
  }

  // Check if doctor is on leave
  const doctorOnLeave = doctor.leaves.some((leave) => {
    return (
      leave.leaveDate.toDateString() ===
      data.appointmentStart.toDateString()
    );
  });

  if (doctorOnLeave) {
    throw new ApiError(
      400,
      "Doctor is on leave on the selected date."
    );
  }

  // Check if slot is already booked
  const existing = await prisma.appointment.findFirst({
  where: {
    doctorId: data.doctorId,

    status: AppointmentStatus.BOOKED,

    appointmentStart: {
      lt: data.appointmentEnd,
    },

    appointmentEnd: {
      gt: data.appointmentStart,
    },
  },
});

  if (existing) {
    throw new ApiError(
      400,
      "This slot is already booked."
    );
  }

  return prisma.appointment.create({
    data: {
      doctorId: data.doctorId,
      patientId: data.patientId,
      appointmentStart: data.appointmentStart,
      appointmentEnd: data.appointmentEnd,
    },
    include: {
      doctor: true,
      patient: true,
    },
  });
}

  async findAll() {
    return prisma.appointment.findMany({
      include: {
        doctor: true,
        patient: true,
      },

      orderBy: {
        appointmentStart: "asc",
      },
    });
  }

  async findByPatient(patientId: string) {
    return prisma.appointment.findMany({
      where: {
        patientId,
      },

      include: {
        doctor: true,
      },

      orderBy: {
        appointmentStart: "asc",
      },
    });
  }

  async cancel(id: string) {
    const appointment =
      await prisma.appointment.findUnique({
        where: {
          id,
        },
      });

    if (!appointment) {
      throw new ApiError(
        404,
        "Appointment not found."
      );
    }

    return prisma.appointment.update({
      where: {
        id,
      },

      data: {
        status: AppointmentStatus.CANCELLED,
      },
    });
  }

  async reschedule(
    id: string,
    data: RescheduleAppointmentInput
  ) {
    const appointment =
      await prisma.appointment.findUnique({
        where: {
          id,
        },
      });

    if (!appointment) {
      throw new ApiError(
        404,
        "Appointment not found."
      );
    }

    const existing = await prisma.appointment.findFirst({
      where: {
       doctorId: appointment.doctorId,

       status: AppointmentStatus.BOOKED,
   
       appointmentStart: {
        lt: data.appointmentEnd,
       },

        appointmentEnd: {
        gt: data.appointmentStart,
      },
      },
      });

    if (existing) {

      throw new ApiError(
        400,
        "Selected slot is already booked."
      );
    }

    return prisma.appointment.update({
      where: {
        id,
      },

      data: {
        appointmentStart:
          data.appointmentStart,

        appointmentEnd:
          data.appointmentEnd,
      },
    });
  }
  
}

export default new AppointmentService();
