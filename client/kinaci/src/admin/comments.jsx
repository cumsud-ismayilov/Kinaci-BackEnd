import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function Comments() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]); // filter üçün
  const [editComment, setEditComment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [search, setSearch] = useState(""); // search input state

  // Backend-dən şərhləri gətir
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/comments`);
        if (Array.isArray(res.data)) {
          setData(res.data);
          setFilteredData(res.data);
        } else {
          setData([]);
          setFilteredData([]);
        }
      } catch (err) {
        console.error(err);
        toast.error("Şərhləri gətirmək mümkün olmadı");
      }
    };
    fetchComments();
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
            c.author.toLowerCase().includes(lower) ||
            c.text.toLowerCase().includes(lower)
        )
      );
    }
  }, [search, data]);

  const deleteComment = async (id) => {
    if (!window.confirm("Bu şərhi silmək istədiyinizə əminsiniz?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/comments/${id}`);
      const newData = data.filter((c) => c._id !== id);
      setData(newData);
      setFilteredData(newData);
      toast.success("Şərh uğurla silindi");
    } catch (err) {
      console.error(err);
      toast.error("Şərhi silmək mümkün olmadı");
    }
  };

  const startEditing = (comment) => {
    setEditComment({ ...comment });
    setModalOpen(true);
  };

  const saveChanges = async () => {
    try {
      const { _id, text, author } = editComment;
      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/comments/${_id}`, {
        text,
        author,
      });
      const newData = data.map((c) => (c._id === _id ? res.data : c));
      setData(newData);
      setFilteredData(newData);
      toast.success("Şərh uğurla yeniləndi");
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Yeniləmək mümkün olmadı");
    }
  };

  return (
    <div className="text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-semibold mb-5">Comments</h1>

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
              <th className="p-3">Author</th>
              <th className="p-3">Comment</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(filteredData) && filteredData.length > 0 ? (
              filteredData.map((c) => (
                <tr key={c._id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-2 sm:p-3">{c.name}</td>
                  <td className="p-2 sm:p-3">{c.text}</td>
                  <td className="p-2 sm:p-3 flex gap-2">
                    <EditIcon
                      className="cursor-pointer text-blue-500"
                      onClick={() => startEditing(c)}
                    />
                    <DeleteIcon
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteComment(c._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4">
                  Şərh tapılmadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {modalOpen && editComment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">Edit Comment</h2>

            <div className="space-y-3">
              <div>
                <label className="block mb-1 dark:text-gray-200">Author</label>
                <input
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editComment.name}
                  onChange={(e) =>
                    setEditComment({ ...editComment, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block mb-1 dark:text-gray-200">Comment</label>
                <textarea
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                  value={editComment.text}
                  onChange={(e) =>
                    setEditComment({ ...editComment, text: e.target.value })
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
