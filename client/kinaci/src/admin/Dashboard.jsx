import { BarChart3, Users, Home, MessageSquare } from "lucide-react";

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 dark:text-white">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Users" value="154" icon={<Users />} />
        <Card title="Properties" value="87" icon={<Home />} />
        <Card title="Comments" value="45" icon={<MessageSquare />} />
        <Card title="Inquiries" value="32" icon={<BarChart3 />} />
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Activity Chart</h2>
        <div className="h-56 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center dark:text-white">
          Chart Placeholder (Recharts qoşmaq istəsən deyim)
        </div>
      </div>
    </div>
  );
}

function Card({ title, value, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex items-center justify-between">
      <div>
        <p className="text-gray-500 dark:text-gray-300 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-2 dark:text-white">{value}</h2>
      </div>
      <div className="opacity-60">{icon}</div>
    </div>
  );
}
