function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      <div>
        <h1 className="text-4xl font-bold">
          Healthcare Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Admin 👋
        </p>
      </div>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
        + New Appointment
      </button>
    </div>
  );
}

export default DashboardHeader;
