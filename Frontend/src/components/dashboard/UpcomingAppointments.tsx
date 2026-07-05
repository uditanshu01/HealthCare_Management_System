function UpcomingAppointments() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-5">
        Upcoming Schedule
      </h2>

      <div className="space-y-4">
        <div className="border-l-4 border-blue-600 pl-4">
          <h3 className="font-semibold">
            Cardiology Consultation
          </h3>

          <p className="text-gray-500">
            4 July • 3:30 PM
          </p>
        </div>

        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="font-semibold">
            Follow-up Appointment
          </h3>

          <p className="text-gray-500">
            5 July • 11:00 AM
          </p>
        </div>
      </div>
    </div>
  );
}

export default UpcomingAppointments;
