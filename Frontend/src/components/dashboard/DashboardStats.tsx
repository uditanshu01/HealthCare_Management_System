import StatCard from "./StatCard";

function DashboardStats() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
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
  );
}

export default DashboardStats;