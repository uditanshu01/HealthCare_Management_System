import PrescriptionTable from "../../components/prescriptions/PrescriptionTable";

export default function Prescriptions() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          Prescriptions
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Add Prescription
        </button>
      </div>

      <PrescriptionTable />
    </div>
  );
}
