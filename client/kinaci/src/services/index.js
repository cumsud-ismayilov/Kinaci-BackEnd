import { api } from "../api";

export const getAllCompanies = async () => {

  const res = await api.get("/products");
  if (!res.data) {
    throw new Error("Get All Companies fetch Error");
  }
  console.log("All Fetch bitdi", res.data);
  return res.data
}




// Tək məhsulu id-ə görə çəkmək
export const getProductById = async (id) => {
  try {
    const res = await api.get(`/products/${id}`); // yalnız kliklənən məhsulu çəkir
    if (!res.data) {
      throw new Error("Product fetch error");
    }
    console.log("Single Product Fetch:", res.data);
    return res.data;
  } catch (error) {
    console.error("getProductById Error:", error);
    throw error;
  }
};
