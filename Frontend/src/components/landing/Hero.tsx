import { Link } from "react-router-dom";
import hero from "../../assets/hero.png";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-r from-blue-50 to-white">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-8">

        <div>

          <h1 className="text-6xl font-extrabold leading-tight">

            Your Health,

            <span className="text-blue-600">
              {" "}Our Priority
            </span>

          </h1>

          <p className="text-gray-600 mt-6 text-xl">

            Smart Healthcare Appointment Management System.

            Manage doctors, patients, appointments,
            prescriptions and medical records effortlessly.

          </p>

          <div className="flex gap-5 mt-10">

            <Link
              to="/login"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50"
            >
              Register
            </Link>

          </div>

        </div>

        <div>

          <img
            src={hero}
            alt="Healthcare"
            className="w-full"
          />

        </div>

      </div>

    </section>
  );
}