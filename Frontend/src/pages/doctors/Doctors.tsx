import DoctorTable from "../../components/doctors/DoctorTable";

export default function Doctors() {
  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <h1 className="text-4xl font-bold">
          Doctors
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Add Doctor
        </button>

      </div>

      <DoctorTable />

    </div>
  );
}