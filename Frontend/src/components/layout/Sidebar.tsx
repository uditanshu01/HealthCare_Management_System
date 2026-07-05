import {
  LayoutDashboard,
  UserRound,
  CalendarDays,
  ClipboardList,
  Bell,
  Settings,
  Clock3,

  CalendarX2,
  FileText,
  

} from "lucide-react";

import { Link } from "react-router-dom";
import { Users } from "lucide-react";
import { LogIn, UserPlus } from "lucide-react";

const menus = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/" },
  { title: "Doctors", icon: UserRound, path: "/doctors" },
  { title: "Patients",icon: Users,path: "/patients"},
  { title: "Appointments",icon: CalendarDays,path: "/appointments"},
  { title: "Working Hours",icon: Clock3,path: "/working-hours",},
  { title: "Doctor Leaves",icon: CalendarX2,path: "/doctor-leaves",},
  { title: "Medical Notes", icon: ClipboardList, path: "/notes" },
  { title: "Prescriptions",icon: FileText,path: "/prescriptions"},
  { title: "Notifications", icon: Bell, path: "/notifications" },
  {
  title: "Login",
  icon: LogIn,
  path: "/login",
},
{
  title: "Register",
  icon: UserPlus,
  path: "/register",
},
  { title: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-screen bg-slate-900 text-white fixed left-0 top-0">
      <div className="text-3xl font-bold p-8 border-b border-slate-700">
        🏥 HealthCare
      </div>

      <nav className="mt-6 px-4 space-y-2">
        {menus.map((m) => (
  <Link
    key={m.title}
    to={m.path}
    className="flex items-center gap-4 w-full p-4 rounded-xl hover:bg-slate-800 transition"
  >
    <m.icon size={22} />
    <span>{m.title}</span>
  </Link>
))}
      </nav>
    </aside>
  );
}