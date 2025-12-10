import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";

export default function Properties() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [editProperty, setEditProperty] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [newProperty, setNewProperty] = useState({
    title: "",
    city: "",
    location: "",
    rooms: "",
    size: "",
    squareMeter: "",
    baths: "",
    floor: "",
    distanceOfSea: "",
    propertyType: "",
    transactionType: "",
    price: "",
    citizenship: "",
    investment: "",
    residencePermit: "",
    date: "",
    images: {
      image1: "", image2: "", image3: "", image4: "", image5: "", image6: "", image7: "", image8: ""
    },
    infrastructure: [],
  });
  const [search, setSearch] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // Fetch properties
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
        setData(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error(err);
        toast.error("Properties gətirmək mümkün olmadı");
      }
    };
    fetchProperties();
  }, []);

  // Search/filter
  useEffect(() => {
    if (!search) setFilteredData(data);
    else {
      const lower = search.toLowerCase();
      setFilteredData(
        data.filter(
          (p) =>
            p.title.toLowerCase().includes(lower) ||
            p.location.toLowerCase().includes(lower)
        )
      );
    }
    setCurrentPage(1);
  }, [search, data]);

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Delete property
  const deleteProperty = async (id) => {
    if (!window.confirm("Bu əmlakı silmək istədiyinizə əminsiniz?")) return;
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
      setData(data.filter((p) => p._id !== id));
      toast.success("Əmlak uğurla silindi");
    } catch (err) {
      console.error(err);
      toast.error("Silmək mümkün olmadı");
    }
  };

  // Start editing
  const startEditing = (property) => {
    setEditProperty({ ...property });
    setModalOpen(true);
  };

  // Save changes
  const saveChanges = async () => {
    try {
      const { _id, images, infrastructure, date, ...rest } = editProperty;

      const infraArray =
        typeof infrastructure === "string"
          ? infrastructure.split("\n").map((i) => i.trim()).filter(Boolean)
          : infrastructure;

      const newDate = date ? new Date(date) : null;

      const res = await axios.put(`${import.meta.env.VITE_API_URL}/api/products/${_id}`, {
        ...rest,
        images,
        infrastructure: infraArray,
        date: newDate,
      });

      setData(data.map((p) => (p._id === _id ? res.data : p)));
      toast.success("Əmlak uğurla yeniləndi");
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      toast.error("Yeniləmək mümkün olmadı");
    }
  };

// Add new property
const addProperty = async () => {
  try {
    const infraArray =
      typeof newProperty.infrastructure === "string"
        ? newProperty.infrastructure.split("\n").map(i => i.trim()).filter(Boolean)
        : newProperty.infrastructure;

    // İndi id frontend-dən gəlir
    if (!newProperty.id) {
      toast.error("ID daxil edilməlidir");
      return;
    }

    const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, {
      ...newProperty,
      infrastructure: infraArray,
      date: newProperty.date ? new Date(newProperty.date).toISOString() : ""
    });

    setData([res.data, ...data]);
    toast.success("Yeni əmlak əlavə edildi!");
    setAddModalOpen(false);

    // Reset fields
    setNewProperty({
      id: "",
      title: "",
      city: "",
      location: "",
      rooms: "",
      size: "",
      squareMeter: "",
      baths: "",
      floor: "",
      distanceOfSea: "",
      propertyType: "",
      transactionType: "",
      price: "",
      citizenship: "",
      investment: "",
      residencePermit: "",
      date: "",
      images: { image1:"", image2:"", image3:"", image4:"", image5:"", image6:"", image7:"", image8:"" },
      infrastructure: [],
    });

  } catch (err) {
    console.error(err.response?.data || err.message);
    toast.error("Əmlak əlavə etmək mümkün olmadı");
  }
};



  return (
    <div className="text-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-semibold mb-5">Properties</h1>

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
          Add New Property
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 shadow rounded">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Title</th>
              <th className="p-3">Location</th>
              <th className="p-3">Price</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((p) => (
                <tr key={p._id} className="border-b border-gray-300 dark:border-gray-600">
                  <td className="p-2 sm:p-3">
                    {p.images?.image1 && (
                      <img
                        src={p.images.image1}
                        alt={p.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                    )}
                  </td>
                  <td className="p-2 sm:p-3">{p.title}</td>
                  <td className="p-2 sm:p-3">{p.location}</td>
                  <td className="p-2 sm:p-3">{p.price}</td>
                  <td className="p-2 sm:p-3 flex gap-2">
                    <EditIcon
                      className="cursor-pointer text-blue-500"
                      onClick={() => startEditing(p)}
                    />
                    <DeleteIcon
                      className="cursor-pointer text-red-500"
                      onClick={() => deleteProperty(p._id)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Properties tapılmadı
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : ""
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Edit Modal */}
      {modalOpen && editProperty && (
        <PropertyModal
          property={editProperty}
          setProperty={setEditProperty}
          onClose={() => setModalOpen(false)}
          onSave={saveChanges}
        />
      )}

      {/* Add Modal */}
      {addModalOpen && (
        <PropertyModal
          property={newProperty}
          setProperty={setNewProperty}
          onClose={() => setAddModalOpen(false)}
          onSave={addProperty}
          isNew
        />
      )}
    </div>
  );
}

// Reusable Modal Component
function PropertyModal({ property, setProperty, onClose, onSave, isNew }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-lg w-96 max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-100">
          {isNew ? "Add Property" : "Edit Property"}
        </h2>

        <div className="space-y-3">
          {[
            "id","title","city","location","rooms","size","squareMeter","baths",
            "floor","distanceOfSea","propertyType","transactionType","price",
            "citizenship","investment","residencePermit"
          ].map((field) => (
            <div key={field}>
              <label className="block mb-1 dark:text-gray-200">{field}</label>
              <input
                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                value={property[field] || ""}
                onChange={(e) =>
                  setProperty({ ...property, [field]: e.target.value })
                }
              />
            </div>
          ))}

          <div>
            <label className="block mb-1 dark:text-gray-200">Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
              value={property.date ? new Date(property.date).toISOString().substring(0,10) : ""}
              onChange={(e) =>
                setProperty({ ...property, date: e.target.value })
              }
            />
          </div>

          {/* Images */}
          <div>
            <h3 className="font-semibold mb-1 dark:text-gray-200">Images</h3>
            {property.images &&
              Object.entries(property.images).map(([key, val]) => (
                <div key={key} className="mb-1">
                  <label className="block text-sm dark:text-gray-300">{key}</label>
                  <input
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
                    value={val || ""}
                    onChange={(e) =>
                      setProperty({
                        ...property,
                        images: { ...property.images, [key]: e.target.value },
                      })
                    }
                  />
                </div>
              ))}
          </div>

          {/* Infrastructure */}
          <div>
            <h3 className="font-semibold mb-1 dark:text-gray-200">Infrastructure</h3>
            <textarea
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-100"
              rows={5}
              value={
                Array.isArray(property.infrastructure)
                  ? property.infrastructure.join("\n")
                  : property.infrastructure
              }
              onChange={(e) =>
                setProperty({ ...property, infrastructure: e.target.value })
              }
            />
            <p className="text-sm text-gray-500">Hər bir elementi yeni sətrə yazın</p>
          </div>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <button
            className="px-4 py-2 border rounded dark:border-gray-600 dark:text-gray-200"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`px-4 py-2 rounded ${isNew ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
            onClick={onSave}
          >
            {isNew ? "Add" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
