import StatCard from "../../components/dashboard/StatCard";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">
        Healthcare Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <StatCard
          title="Doctors"
          value="26"
          color="text-blue-600"
        />

        <StatCard
          title="Patients"
          value="415"
          color="text-green-600"
        />

        <StatCard
          title="Appointments"
          value="81"
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

export default Dashboard;