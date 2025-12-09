import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function Users() {
  const [data, setData] = useState([]);
  const [editUser, setEditUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/users`
        );
        if (Array.isArray(res.data)) setData(res.data);
        else setData([]);
      } catch (err) {
        console.error(err);
        toast.error("İstifadəçiləri gətirmək mümkün olmadı");
      }
    };
    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    if (!window.confirm("Bu istifadəçini silmək istədiyinizə əminsiniz?"))
      return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/users/${id}`);
      setData(data.filter((u) => u._id !== id));
      toast.success("İstifadəçi uğurla silindi");
    } catch (err) {
      console.error(err);
      toast.error("İstifadəçini silmək mümkün olmadı");
    }
  };

  const startEditing = (user) => {
    setEditUser({ ...user });
    setModalOpen(true);
  };

  const saveChanges = async () => {
    try {
      const { _id, fullName, email, phone, role } = editUser;
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/users/${_id}`,
        {
          fullName,
          email,
          phone,
          role,
        }
      );
      setData(data.map((u) => (u._id === _id ? res.data : u)));
      toast.success("İstifadəçi uğurla yeniləndi");
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Yeniləmək mümkün olmadı");
    }
  };

  return (
    <div className="text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-semibold mb-5">Users</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Role</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(data) && data.length > 0 ? (
              data.map((u) => (
                <tr
                  key={u._id}
                  className="border-b border-gray-300 dark:border-gray-600"
                >
                  <td className="p-2 sm:p-3">{u.fullName}</td>
                  <td className="p-2 sm:p-3">{u.email}</td>
                  <td className="p-2 sm:p-3">{u.phone}</td>
                  <td className="p-2 sm:p-3">{u.role}</td>
                  <td className="p-2 sm:p-3 flex gap-2">
                    <EditIcon
                      className="cursor-pointer text-blue-500"
                      onClick={() => startEditing(u)}
                    />
                    <DeleteIcon
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteUser(u._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  İstifadəçi tapılmadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Simple Modal */}
      {modalOpen && editUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">
              Edit User
            </h2>

            <div className="space-y-3">
              <div>
                <label className="block mb-1 dark:text-gray-200">
                  Full Name
                </label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editUser.fullName}
                  onChange={(e) =>
                    setEditUser({ ...editUser, fullName: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editUser.email}
                  onChange={(e) =>
                    setEditUser({ ...editUser, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Phone</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editUser.phone}
                  onChange={(e) =>
                    setEditUser({ ...editUser, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Role</label>
                <select
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  value={editUser.role}
                  onChange={(e) =>
                    setEditUser({ ...editUser, role: e.target.value })
                  }
                >
                  <option
                    value="admin"
                    className="dark:bg-gray-700 dark:text-gray-100"
                  >
                    Admin
                  </option>
                  <option
                    value="user"
                    className="dark:bg-gray-700 dark:text-gray-100"
                  >
                    User
                  </option>
                </select>
              </div>
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-4 py-2 border rounded dark:border-gray-600 dark:text-gray-200"
                onClick={() => setModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={saveChanges}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
