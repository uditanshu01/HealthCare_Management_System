const doctors = [
  {
    id: 1,
    name: "Dr. Amit Sharma",
    specialization: "Cardiology",
    experience: "8 Years",
  },
  {
    id: 2,
    name: "Dr. Priya Singh",
    specialization: "Neurology",
    experience: "5 Years",
  },
];

export default function DoctorTable() {
  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Doctor</th>
            <th className="p-3 text-left">Specialization</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="border-t">
              <td className="p-3">{doctor.name}</td>
              <td className="p-3">{doctor.specialization}</td>
              <td className="p-3">{doctor.experience}</td>
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