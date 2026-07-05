import AppointmentTable from "../../components/appointments/AppointmentTable";

export default function Appointments() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Appointments
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Book Appointment
        </button>
      </div>

      <AppointmentTable />
    </div>
  );
}