import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 bg-blue-600 text-white items-center justify-center">
        <div className="max-w-md px-10">
          <h1 className="text-5xl font-bold">
            Healthcare
          </h1>

          <p className="mt-6 text-lg">
            Appointment Management System
          </p>

          <p className="mt-4 text-blue-100">
            Book appointments, manage doctors,
            prescriptions and notifications from
            one place.
          </p>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center bg-gray-50">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;