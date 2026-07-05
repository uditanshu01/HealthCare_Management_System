const appointments = [
  {
    patient: "Rahul Sharma",
    doctor: "Dr. Mehta",
    time: "10:00 AM",
  },
  {
    patient: "Priya Singh",
    doctor: "Dr. Gupta",
    time: "11:30 AM",
  },
  {
    patient: "Amit Verma",
    doctor: "Dr. Khan",
    time: "2:00 PM",
  },
];

function RecentAppointments() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Today's Appointments
      </h2>

      <div className="space-y-4">
        {appointments.map((appointment) => (
          <div
            key={appointment.patient}
            className="border-b pb-3"
          >
            <h3 className="font-semibold">
              {appointment.patient}
            </h3>

            <p className="text-gray-500">
              {appointment.doctor}
            </p>

            <span className="text-blue-600 text-sm">
              {appointment.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentAppointments;
