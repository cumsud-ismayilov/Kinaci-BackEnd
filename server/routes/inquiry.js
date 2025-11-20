import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

// ➤ Yeni inquiry yarat
router.post("/", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    const saved = await newInquiry.save();
    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Sorğu göndərilərkən xəta baş verdi", error });
  }
});

// ➤ Bütün inquiry-ləri əldə et
router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json(error);
  }
});

// ➤ DELETE inquiry
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Inquiry.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Sorğu tapılmadı" });
    res.status(200).json({ message: "Sorğu silindi ✅" });
  } catch (error) {
    res.status(500).json({ message: "Sorğu silinərkən xəta baş verdi", error });
  }
});


export default router;
