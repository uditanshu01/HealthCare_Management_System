interface Props {
  title: string;
  value: string | number;
  color: string;
}

export default function StatCard({
  title,
  value,
  color,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <p className="text-gray-500">{title}</p>

      <h2 className={`text-4xl font-bold mt-4 break-words ${color}`}>
        {value}
      </h2>
    </div>
  );
}