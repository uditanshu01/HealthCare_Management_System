const appointments = [
  {
    id: 1,
    doctor: "Dr. Amit Sharma",
    patient: "Rahul Sharma",
    date: "04 Jul 2026",
    time: "10:00 AM",
    status: "Booked",
  },
  {
    id: 2,
    doctor: "Dr. Priya Singh",
    patient: "Anjali Gupta",
    date: "05 Jul 2026",
    time: "11:30 AM",
    status: "Completed",
  },
];

export default function AppointmentTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Doctor</th>
            <th className="p-3 text-left">Patient</th>
            <th className="p-3 text-left">Date</th>
            <th className="p-3 text-left">Time</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id} className="border-t">
              <td className="p-3">{appointment.doctor}</td>
              <td className="p-3">{appointment.patient}</td>
              <td className="p-3">{appointment.date}</td>
              <td className="p-3">{appointment.time}</td>
              <td className="p-3">
                <span className="px-2 py-1 rounded bg-green-100 text-green-700 text-sm">
                  {appointment.status}
                </span>
              </td>
              <td className="p-3">
                <button className="text-blue-600 mr-3">
                  Reschedule
                </button>

                <button className="text-red-600">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}