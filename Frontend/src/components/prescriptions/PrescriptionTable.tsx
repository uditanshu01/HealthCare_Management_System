const prescriptions = [
  {
    id: 1,
    patient: "Rahul Sharma",
    medicine: "Paracetamol",
    dosage: "500 mg",
  },
  {
    id: 2,
    patient: "Anjali Gupta",
    medicine: "Amoxicillin",
    dosage: "250 mg",
  },
];

export default function PrescriptionTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Patient</th>
            <th className="p-3">Medicine</th>
            <th className="p-3">Dosage</th>
          </tr>
        </thead>

        <tbody>
          {prescriptions.map((p) => (
            <tr key={p.id} className="border-t">
              <td className="p-3">{p.patient}</td>
              <td className="p-3">{p.medicine}</td>
              <td className="p-3">{p.dosage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
