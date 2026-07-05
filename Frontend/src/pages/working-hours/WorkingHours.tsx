import WorkingHoursTable from "../../components/working-hours/WorkingHoursTable";

export default function WorkingHours() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">
          Working Hours
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Add Working Hours
        </button>
      </div>

      <WorkingHoursTable />
    </div>
  );
}