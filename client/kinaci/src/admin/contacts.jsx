import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function Contacts() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [editContact, setEditContact] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/contacts`
        );
        if (Array.isArray(res.data)) setData(res.data);
        else setData([]);
      } catch (err) {
        console.error(err);
        toast.error("Contacts gətirmək mümkün olmadı");
      }
    };
    fetchContacts();
  }, []);

  // Search funksiyası
  useEffect(() => {
    if (!search) {
      setFilteredData(data);
    } else {
      const lower = search.toLowerCase();
      setFilteredData(
        data.filter(
          (c) =>
            c.name.toLowerCase().includes(lower) ||
            c.email.toLowerCase().includes(lower)
        )
      );
    }
  }, [search, data]);

  const deleteContact = async (id) => {
    if (!window.confirm("Bu contact-i silmək istədiyinizə əminsiniz?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/contacts/${id}`);
      setData(data.filter((c) => c._id !== id));
      toast.success("Contact uğurla silindi");
    } catch (err) {
      console.error(err);
      toast.error("Silmək mümkün olmadı");
    }
  };

  const startEditing = (contact) => {
    setEditContact({ ...contact });
    setModalOpen(true);
  };

  const saveChanges = async () => {
    try {
      const { _id, name, email, message } = editContact;
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/contacts/${_id}`,
        {
          name,
          email,
          message,
        }
      );
      setData(data.map((c) => (c._id === _id ? res.data : c)));
      toast.success("Contact uğurla yeniləndi");
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Yeniləmək mümkün olmadı");
    }
  };

  return (
    <div className="text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-semibold mb-5">Contacts</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Axtar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th>Created At</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
              filteredData.map((c) => (
                <tr
                  key={c._id}
                  className="border-b border-gray-300 dark:border-gray-600"
                >
                  <td className="p-2 sm:p-3">{c.name}</td>
                  <td className="p-2 sm:p-3">{c.email}</td>
                  <td>{new Date(c.createdAt).toLocaleString()}</td>
                  <td className="p-2 sm:p-3 flex gap-2">
                    <EditIcon
                      className="cursor-pointer text-blue-500"
                      onClick={() => startEditing(c)}
                    />
                    <DeleteIcon
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteContact(c._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  Contact tapılmadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && editContact && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">
              Edit Contact
            </h2>

            <div className="space-y-3">
              <div>
                <label className="block mb-1 dark:text-gray-200">Name</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editContact.name}
                  onChange={(e) =>
                    setEditContact({ ...editContact, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Email</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editContact.email}
                  onChange={(e) =>
                    setEditContact({ ...editContact, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Message</label>
                <textarea
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editContact.message}
                  onChange={(e) =>
                    setEditContact({ ...editContact, message: e.target.value })
                  }
                />
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
