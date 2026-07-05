import MedicalNotesTable from "../../components/medical-notes/MedicalNotesTable";

export default function MedicalNotes() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">
          Medical Notes
        </h1>

        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl">
          + Add Note
        </button>
      </div>

      <MedicalNotesTable />
    </div>
  );
}
