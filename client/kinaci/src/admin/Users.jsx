import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(r => r.json())
      .then(d => setData(d));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-5">Users</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow rounded">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {data.map((u) => (
              <tr key={u._id} className="border-b">
                <td className="p-3">{u.name}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3 flex gap-3">
                  <EditIcon className="cursor-pointer text-blue-500" />
                  <DeleteIcon className="cursor-pointer text-red-500" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
