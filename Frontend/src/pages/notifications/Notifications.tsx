const notifications = [
  "Appointment booked successfully.",
  "Doctor leave approved.",
  "Prescription uploaded.",
];

export default function Notifications() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">
        Notifications
      </h1>

      {notifications.map((notification, index) => (
        <div
          key={index}
          className="bg-white shadow rounded-xl p-4"
        >
          {notification}
        </div>
      ))}
    </div>
  );
}
