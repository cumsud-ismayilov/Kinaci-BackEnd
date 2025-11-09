import express from "express";
import Property from "../models/Property.js";

const router = express.Router();

// GET all properties
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    res.status(500).json({ message: "Server error ❌" });
  }
});

// CREATE new property
router.post("/", async (req, res) => {
  try {
    const newProperty = await Property.create(req.body);
    res.json(newProperty);
  } catch (err) {
    res.status(500).json({ message: "Server error ❌" });
  }
});

// UPDATE property
router.put("/:id", async (req, res) => {
  try {
    const updated = await Property.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: "Server error ❌" });
  }
});


// DELETE property
router.delete("/:id", async (req, res) => {
  try {
    await Property.findByIdAndDelete(req.params.id);
    res.json({ message: "Property deleted ✅" });
  } catch (err) {
    res.status(500).json({ message: "Server error ❌" });
  }
});

export default router;
