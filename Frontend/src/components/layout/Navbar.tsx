import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-white shadow flex items-center justify-between px-8">
      <div className="relative">
        <Search
          className="absolute left-3 top-3 text-gray-400"
          size={18}
        />

        <input
          placeholder="Search..."
          className="pl-10 pr-4 py-3 w-60 md:w-80 border rounded-xl"
         />
      </div>

      <div className="flex items-center gap-6">
        <Bell />

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            A
          </div>

          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-sm text-gray-500">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}