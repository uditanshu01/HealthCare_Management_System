import prisma from "../config/prisma";
import { ApiError } from "../utils/ApiError";

class SlotService {

 async generateSlots(
  doctorId: string,
  date: Date
) {
  const doctor = await prisma.doctor.findUnique({
    where: {
      id: doctorId,
    },
    include: {
      workingHours: true,
      leaves: true,
    },
  });

  if (!doctor) {
    throw new ApiError(404, "Doctor not found.");
  }

  const day = date.getDay();

  const schedule = doctor.workingHours.find(
    (item) => item.dayOfWeek === day
  );

  if (!schedule) {
    return [];
  }

  const start = new Date(date);
  const end = new Date(date);

  const [startHour, startMinute] =
    schedule.startTime.split(":").map(Number);

  const [endHour, endMinute] =
    schedule.endTime.split(":").map(Number);

  start.setHours(startHour, startMinute, 0, 0);
  end.setHours(endHour, endMinute, 0, 0);

  const slots = [];

  let current = new Date(start);

  while (current < end) {
    const slotEnd = new Date(current);

    slotEnd.setMinutes(
      slotEnd.getMinutes() + schedule.slotDuration
    );

    if (slotEnd <= end) {
      slots.push({
        start: new Date(current),
        end: new Date(slotEnd),
      });
    }

    current = new Date(slotEnd);
  }

  // Check if doctor is on leave
const doctorOnLeave = doctor.leaves.some((leave) => {
  const leaveDate = new Date(leave.leaveDate);

  return (
    leaveDate.getFullYear() === date.getFullYear() &&
    leaveDate.getMonth() === date.getMonth() &&
    leaveDate.getDate() === date.getDate()
  );
});

if (doctorOnLeave) {
  return [];
}

// Fetch booked appointments
const appointments =
  await prisma.appointment.findMany({
    where: {
      doctorId,
      status: "BOOKED",
      appointmentStart: {
        gte: start,
        lt: end,
      },
    },
  });

// Fetch active slot holds
const holds =
  await prisma.slotHold.findMany({
    where: {
      doctorId,

      expiresAt: {
        gt: new Date(),
      },
    },
  });

// Filter unavailable slots
const availableSlots = slots.filter((slot) => {
  const booked = appointments.some(
    (appointment) =>
      appointment.appointmentStart.getTime() ===
      slot.start.getTime()
  );

  const held = holds.some(
    (hold) =>
      hold.slotStart.getTime() ===
      slot.start.getTime()
  );

  return !booked && !held;
});

return availableSlots;
}

}

export default new SlotService();
