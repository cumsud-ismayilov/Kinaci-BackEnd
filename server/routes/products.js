import express from "express";
import Product from "../models/Products.js";

const router = express.Router();

// 1️⃣ GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: "Products gətirmək mümkün olmadı" });
  }
});

// 2️⃣ GET single product by _id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id }); // öz ID
    if (!product) {
      return res.status(404).json({ message: "Product tapılmadı" });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: "Server xətası" });
  }
});


// 3️⃣ ADD new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: "Product əlavə etmək mümkün olmadı" });
  }
});

// 4️⃣ DELETE product by _id
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Product tapılmadı" });
    res.status(200).json({ message: "Product uğurla silindi" });
  } catch (err) {
    res.status(500).json({ message: "Product silmək mümkün olmadı" });
  }
});

// 5️⃣ UPDATE product by _id
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // yenilənmiş sənədi qaytarır
    );
    if (!updated) return res.status(404).json({ message: "Product tapılmadı" });
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: "Product yeniləmək mümkün olmadı" });
  }
});

export default router;
