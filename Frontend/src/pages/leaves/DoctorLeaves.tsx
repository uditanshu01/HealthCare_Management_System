import LeaveTable from "../../components/leaves/LeaveTable";

export default function DoctorLeaves() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Doctor Leaves
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Add Leave
        </button>
      </div>

      <LeaveTable />
    </div>
  );
}