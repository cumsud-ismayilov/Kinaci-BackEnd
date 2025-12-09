import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarChart3, Users, Home, MessageSquare } from "lucide-react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Dashboard() {
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    users: 0,
    properties: 0,
    comments: 0,
    inquiries: 0,
  });

  const [chartData, setChartData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchStatsAndAlerts = async () => {
      try {
        // Axios ilə hər endpoint-i ayrıca çağırırıq
        const resUsers = await axios.get(`${import.meta.env.VITE_API_URL}/api/users`).catch(() => ({ data: [] }));
        const resProperties = await axios.get(`${import.meta.env.VITE_API_URL}/api/properties`).catch(() => ({ data: [] }));
        const resComments = await axios.get(`${import.meta.env.VITE_API_URL}/api/comments`).catch(() => ({ data: [] }));
        const resInquiries = await axios.get(`${import.meta.env.VITE_API_URL}/api/inquiries`).catch(() => ({ data: [] }));

        const usersData = Array.isArray(resUsers.data) ? resUsers.data : [];
        const propertiesData = Array.isArray(resProperties.data) ? resProperties.data : [];
        const commentsData = Array.isArray(resComments.data) ? resComments.data : [];
        const inquiriesData = Array.isArray(resInquiries.data) ? resInquiries.data : [];

        // Statistika
        setStats({
          users: usersData.length,
          properties: propertiesData.length,
          comments: commentsData.length,
          inquiries: inquiriesData.length,
        });

        // Son 24 saat alerts
        const now = new Date();
        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);

        const newUsers = usersData.filter(u => u.createdAt && new Date(u.createdAt) > yesterday).length;
        const newComments = commentsData.filter(c => c.createdAt && new Date(c.createdAt) > yesterday).length;
        const newInquiries = inquiriesData.filter(i => i.createdAt && new Date(i.createdAt) > yesterday).length;

        const alertList = [];
        if (newUsers > 0) alertList.push({ text: `${newUsers} yeni istifadəçi əlavə olundu`, link: "/admin/users" });
        if (newComments > 0) alertList.push({ text: `${newComments} yeni şərh gəldi`, link: "/admin/comments" });
        if (newInquiries > 0) alertList.push({ text: `${newInquiries} yeni inquiry gəldi`, link: "/admin/inquiries" });

        setAlerts(alertList);

        // Son 7 gün activity chart
        const chartArray = [];
        const days = 7;
        for (let i = days - 1; i >= 0; i--) {
          const date = new Date();
          date.setDate(date.getDate() - i);
          const dayStr = date.toLocaleDateString("en-US", { weekday: "short" });

          chartArray.push({
            day: dayStr,
            users: usersData.filter(u => u.createdAt && new Date(u.createdAt).toDateString() === date.toDateString()).length,
            properties: propertiesData.filter(p => p.createdAt && new Date(p.createdAt).toDateString() === date.toDateString()).length,
            comments: commentsData.filter(c => c.createdAt && new Date(c.createdAt).toDateString() === date.toDateString()).length,
            inquiries: inquiriesData.filter(i => i.createdAt && new Date(i.createdAt).toDateString() === date.toDateString()).length,
          });
        }

        setChartData(chartArray);
      } catch (err) {
        console.error("Dashboard data fetch error:", err);
      }
    };

    fetchStatsAndAlerts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 dark:text-white">Dashboard</h1>

      {/* Alerts */}
      <div className="mb-6">
        {alerts.length > 0 ? (
          <div className="bg-yellow-100 dark:bg-yellow-700 text-yellow-800 dark:text-yellow-100 p-4 rounded shadow space-y-2">
            {alerts.map((alert, index) => (
              <p key={index} className="cursor-pointer hover:underline" onClick={() => navigate(alert.link)}>
                {alert.text}
              </p>
            ))}
          </div>
        ) : (
          <div className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-100 p-4 rounded shadow">
            Son 24 saatda yeni məlumat yoxdur
          </div>
        )}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card title="Users" value={stats.users} icon={<Users />} onClick={() => navigate("/admin/users")} />
        <Card title="Properties" value={stats.properties} icon={<Home />} onClick={() => navigate("/admin/properties")} />
        <Card title="Comments" value={stats.comments} icon={<MessageSquare />} onClick={() => navigate("/admin/comments")} />
        <Card title="Inquiries" value={stats.inquiries} icon={<BarChart3 />} onClick={() => navigate("/admin/inquiries")} />
      </div>

      {/* Activity Chart */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-6">
        <h2 className="text-lg font-semibold mb-4 dark:text-white">Activity Chart (Last 7 Days)</h2>
        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <XAxis dataKey="day" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" />
              <Line type="monotone" dataKey="properties" stroke="#82ca9d" />
              <Line type="monotone" dataKey="comments" stroke="#ffc658" />
              <Line type="monotone" dataKey="inquiries" stroke="#ff7300" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-56 flex items-center justify-center dark:text-white">Loading chart...</div>
        )}
      </div>
    </div>
  );
}

function Card({ title, value, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex items-center justify-between hover:shadow-lg transition-shadow"
    >
      <div>
        <p className="text-gray-500 dark:text-gray-300 text-sm">{title}</p>
        <h2 className="text-2xl font-bold mt-2 dark:text-white">{value}</h2>
      </div>
      <div className="opacity-60">{icon}</div>
    </div>
  );
}
