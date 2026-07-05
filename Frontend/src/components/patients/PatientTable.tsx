const patients = [
  {
    id: 1,
    name: "Rahul Sharma",
    gender: "Male",
    bloodGroup: "B+",
  },
  {
    id: 2,
    name: "Priya Singh",
    gender: "Female",
    bloodGroup: "O+",
  },
];

export default function PatientTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Patient</th>
            <th className="p-3 text-left">Gender</th>
            <th className="p-3 text-left">Blood Group</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id} className="border-t">
              <td className="p-3">{patient.name}</td>
              <td className="p-3">{patient.gender}</td>
              <td className="p-3">{patient.bloodGroup}</td>
              <td className="p-3">
                <button className="text-blue-600 mr-3">
                  Edit
                </button>

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