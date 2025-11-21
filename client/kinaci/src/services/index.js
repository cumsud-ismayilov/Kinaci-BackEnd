import { api } from "../api";

export const getAllCompanies = async () => {

  const res = await api.get("/products");
  if (!res.data) {
    throw new Error("Get All Companies fetch Error");
  }
  console.log("All Fetch bitdi", res.data);
  return res.data
}

export const getAllNews = async () => {

  const res = await api.get("/news");
  if (!res.data) {
    throw new Error("Get All News fetch Error");
  }
  console.log("All Fetch bitdi", res.data);
  return res.data
}

export const getNewsById = async (id) => {
  try {
    const res = await api.get(`/news/${id}`); 
    if (!res.data) {
      throw new Error("News fetch error");
    }
    console.log("Single News Fetch:", res.data);
    return res.data;
  } catch (error) {
    console.error("getNewsById Error:", error);
    throw error;
  }
};




export const getProductById = async (id) => {
  try {
    const res = await api.get(`/products/${id}`); 
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
