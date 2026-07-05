const leaves = [
  {
    id: 1,
    doctor: "Dr. Amit Sharma",
    date: "10 Jul 2026",
    reason: "Personal",
  },
  {
    id: 2,
    doctor: "Dr. Priya Singh",
    date: "15 Jul 2026",
    reason: "Conference",
  },
];

export default function LeaveTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Doctor</th>
            <th className="p-3 text-left">Leave Date</th>
            <th className="p-3 text-left">Reason</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((leave) => (
            <tr key={leave.id} className="border-t">
              <td className="p-3">{leave.doctor}</td>
              <td className="p-3">{leave.date}</td>
              <td className="p-3">{leave.reason}</td>
              <td className="p-3">
                <button className="text-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}