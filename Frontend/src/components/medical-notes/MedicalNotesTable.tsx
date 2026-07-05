const notes = [
  {
    id: 1,
    patient: "Rahul Sharma",
    doctor: "Dr. Amit Sharma",
    note: "Patient recovering well",
  },
  {
    id: 2,
    patient: "Priya Singh",
    doctor: "Dr. Khan",
    note: "Follow-up after 7 days",
  },
];

export default function MedicalNotesTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Patient</th>
            <th className="p-3">Doctor</th>
            <th className="p-3">Medical Note</th>
          </tr>
        </thead>

        <tbody>
          {notes.map((n) => (
            <tr key={n.id} className="border-t">
              <td className="p-3">{n.patient}</td>
              <td className="p-3">{n.doctor}</td>
              <td className="p-3">{n.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}