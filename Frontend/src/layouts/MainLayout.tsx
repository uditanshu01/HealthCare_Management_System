import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="ml-72">
        <Navbar />

        <main className="p-8 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}