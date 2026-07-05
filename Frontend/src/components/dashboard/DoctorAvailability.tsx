const doctors = [
  {
    name: "Dr. Mehta",
    status: "Available",
  },
  {
    name: "Dr. Gupta",
    status: "Busy",
  },
  {
    name: "Dr. Khan",
    status: "Available",
  },
];

function DoctorAvailability() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Doctor Availability
      </h2>

      <div className="space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor.name}
            className="flex justify-between"
          >
            <span>{doctor.name}</span>

            <span
              className={
                doctor.status === "Available"
                  ? "text-green-600"
                  : "text-red-500"
              }
            >
              {doctor.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DoctorAvailability;