const workingHours = [
  {
    id: 1,
    doctor: "Dr. Amit Sharma",
    day: "Monday",
    start: "09:00 AM",
    end: "05:00 PM",
  },
  {
    id: 2,
    doctor: "Dr. Priya Singh",
    day: "Tuesday",
    start: "10:00 AM",
    end: "06:00 PM",
  },
];

export default function WorkingHoursTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Doctor</th>
            <th className="p-3 text-left">Day</th>
            <th className="p-3 text-left">Start</th>
            <th className="p-3 text-left">End</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {workingHours.map((item) => (
            <tr key={item.id} className="border-t">
              <td className="p-3">{item.doctor}</td>
              <td className="p-3">{item.day}</td>
              <td className="p-3">{item.start}</td>
              <td className="p-3">{item.end}</td>
              <td className="p-3">
                <button className="text-blue-600 mr-3">Edit</button>
                <button className="text-red-600">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}