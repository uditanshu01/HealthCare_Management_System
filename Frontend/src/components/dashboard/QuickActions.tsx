import {
  CalendarPlus,
  UserPlus,
  FilePlus2,
  Bell,
} from "lucide-react";

const actions = [
  {
    title: "New Appointment",
    icon: CalendarPlus,
  },
  {
    title: "Add Doctor",
    icon: UserPlus,
  },
  {
    title: "Medical Note",
    icon: FilePlus2,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
];

function QuickActions() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.title}
            className="border rounded-lg p-4 hover:bg-blue-50 flex flex-col items-center gap-3"
          >
            <action.icon size={28} />

            <span>{action.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuickActions;
