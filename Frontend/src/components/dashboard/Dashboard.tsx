import StatCard from "../../components/dashboard/StatCard";

export default function Dashboard() {
  return (
    <div>

      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-5xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back 👋
          </p>
        </div>

        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl">
          + Appointment
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Doctors"
          value={26}
          color="text-blue-600"
        />

        <StatCard
          title="Patients"
          value={415}
          color="text-green-600"
        />

        <StatCard
          title="Appointments"
          value={81}
          color="text-red-500"
        />

        <StatCard
          title="Revenue"
          value="₹1.2L"
          color="text-purple-600"
        />

      </div>

    </div>
  );
}