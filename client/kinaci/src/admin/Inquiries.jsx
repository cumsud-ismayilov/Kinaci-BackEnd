import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function Inquiries() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // filter üçün
  const [editInquiry, setEditInquiry] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState(""); // search state

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/inquiries`);
        if (Array.isArray(res.data)) {
          setData(res.data);
          setFilteredData(res.data);
        } else {
          setData([]);
          setFilteredData([]);
        }
      } catch (err) {
        console.error(err);
        toast.error("Sorğuları gətirmək mümkün olmadı");
      }
    };
    fetchInquiries();
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
            c.email.toLowerCase().includes(lower) ||
            c.phone.toLowerCase().includes(lower) ||
            c.message.toLowerCase().includes(lower)
        )
      );
    }
  }, [search, data]);

  const deleteInquiry = async (id) => {
    if (!window.confirm("Bu sorğunu silmək istədiyinizə əminsiniz?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/inquiries/${id}`);
      const newData = data.filter((c) => c._id !== id);
      setData(newData);
      setFilteredData(newData);
      toast.success("Sorğu uğurla silindi");
    } catch (err) {
      console.error(err);
      toast.error("Silmək mümkün olmadı");
    }
  };

  const startEditing = (inquiry) => {
    setEditInquiry({ ...inquiry });
    setModalOpen(true);
  };

  const saveChanges = async () => {
    try {
      const { _id, name, email, phone, message } = editInquiry;
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/inquiries/${_id}`, {
        name,
        email,
        phone,
        message,
      });
      const newData = data.map((c) => (c._id === _id ? res.data : c));
      setData(newData);
      setFilteredData(newData);
      toast.success("Sorğu uğurla yeniləndi");
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Yeniləmək mümkün olmadı");
    }
  };

  return (
    <div className="text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-semibold mb-5">Inquiries</h1>

      {/* Search input */}
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
              <th className="p-3">Phone</th>
              <th className="p-3">Message</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
              filteredData.map((c) => (
                <tr key={c._id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-2 sm:p-3">{c.name}</td>
                  <td className="p-2 sm:p-3">{c.email}</td>
                  <td className="p-2 sm:p-3">{c.phone}</td>
                  <td className="p-2 sm:p-3">{c.message}</td>
                  <td className="p-2 sm:p-3 flex gap-2">
                    <EditIcon
                      className="cursor-pointer text-blue-500"
                      onClick={() => startEditing(c)}
                    />
                    <DeleteIcon
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteInquiry(c._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Sorğu tapılmadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && editInquiry && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Edit Inquiry</h2>

            <div className="space-y-3">
              <div>
                <label className="block mb-1 dark:text-gray-200">Name</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editInquiry.name}
                  onChange={(e) =>
                    setEditInquiry({ ...editInquiry, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Email</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editInquiry.email}
                  onChange={(e) =>
                    setEditInquiry({ ...editInquiry, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Phone</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editInquiry.phone}
                  onChange={(e) =>
                    setEditInquiry({ ...editInquiry, phone: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-1 dark:text-gray-200">Message</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editInquiry.message}
                  onChange={(e) =>
                    setEditInquiry({ ...editInquiry, message: e.target.value })
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
