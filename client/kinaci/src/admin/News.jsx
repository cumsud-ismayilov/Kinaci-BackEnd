import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

export default function News() {
  const [newsList, setNewsList] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [search, setSearch] = useState("");
  const [editNews, setEditNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newNews, setNewNews] = useState({
    newsImg: "",
    newsDate: "",
    title1: "",
    title2: "",
    title3: "",
    id: "",
  });

  // Fetch news
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/news`);
        setNewsList(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
        toast.error("News gətirmək mümkün olmadı");
      }
    };
    fetchNews();
  }, []);

  // Search/filter
  useEffect(() => {
    if (!search) setFilteredNews(newsList);
    else {
      const lower = search.toLowerCase();
      setFilteredNews(
        newsList.filter(
          (n) =>
            n.title1.toLowerCase().includes(lower) ||
            n.title2.toLowerCase().includes(lower) ||
            n.title3.toLowerCase().includes(lower)
        )
      );
    }
  }, [search, newsList]);

  // Delete
  const deleteNews = async (id) => {
    if (!window.confirm("Bu news-i silmək istədiyinizə əminsiniz?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/news/${id}`);
      setNewsList(newsList.filter((n) => n.id !== id));
      toast.success("News uğurla silindi");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Silmək mümkün olmadı");
    }
  };

  // Start editing
  const startEditing = (news) => {
    setEditNews({ ...news });
    setModalOpen(true);
  };

  // Save changes
  const saveChanges = async () => {
    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/news/${editNews.id}`,
        editNews
      );
      setNewsList(newsList.map((n) => (n.id === editNews.id ? res.data : n)));
      toast.success("News uğurla yeniləndi");
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Yeniləmək mümkün olmadı");
    }
  };

  // Add new news
  const addNews = async () => {
    try {
      if (!newNews.id) {
        toast.error("ID daxil edilməlidir");
        return;
      }
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/news`, newNews);
      setNewsList([res.data, ...newsList]);
      toast.success("Yeni news əlavə edildi!");
      setAddModalOpen(false);
      setNewNews({
        newsImg: "",
        newsDate: "",
        title1: "",
        title2: "",
        title3: "",
        id: "",
      });
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Əlavə etmək mümkün olmadı");
    }
  };

  return (
    <div className="text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-semibold mb-5">News</h1>

      {/* Search + Add */}
      <div className="mb-4 flex justify-between items-center">
        <input
          type="text"
          placeholder="Axtar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/3 p-2 border rounded"
        />
        <button
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 ml-4"
          onClick={() => setAddModalOpen(true)}
        >
          Add New News
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Date</th>
              <th className="p-3">Title 1</th>
              <th className="p-3">Title 2</th>
              <th className="p-3">Title 3</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredNews.length > 0 ? (
              filteredNews.map((n) => (
                <tr key={n.id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-2 sm:p-3">
                    {n.newsImg && (
                      <img
                        src={n.newsImg}
                        alt={n.title2}
                        className="w-20 h-20 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="p-2 sm:p-3">
                    {n.newsDate ? new Date(n.newsDate).toLocaleDateString() : ""}
                  </td>
                  <td className="p-2 sm:p-3">{n.title1}</td>
                  <td className="p-2 sm:p-3">{n.title2}</td>
                  <td className="p-2 sm:p-3">{n.title3}</td>
                  <td className="p-2 sm:p-3 flex gap-2">
                    <EditIcon
                      className="cursor-pointer text-blue-500"
                      onClick={() => startEditing(n)}
                    />
                    <DeleteIcon
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteNews(n.id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  News tapılmadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Modal */}
      {modalOpen && editNews && (
        <NewsModal
          news={editNews}
          setNews={setEditNews}
          onClose={() => setModalOpen(false)}
          onSave={saveChanges}
          isNew={false}
        />
      )}

      {/* Add Modal */}
      {addModalOpen && (
        <NewsModal
          news={newNews}
          setNews={setNewNews}
          onClose={() => setAddModalOpen(false)}
          onSave={addNews}
          isNew={true}
        />
      )}
    </div>
  );
}

// Reusable Modal
function NewsModal({ news, setNews, onClose, onSave, isNew }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">
          {isNew ? "Add News" : "Edit News"}
        </h2>

        <div className="space-y-3">
          {["id", "newsImg", "newsDate", "title1", "title2", "title3"].map((field) => (
            <div key={field}>
              <label className="block mb-1 dark:text-gray-200">{field}</label>
              <input
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                type={field === "newsDate" ? "date" : "text"}
                value={news[field] || ""}
                onChange={(e) =>
                  setNews({ ...news, [field]: e.target.value })
                }
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 border rounded dark:border-gray-600 dark:text-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded ${
              isNew ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            } text-white`}
            onClick={onSave}
          >
            {isNew ? "Add" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
