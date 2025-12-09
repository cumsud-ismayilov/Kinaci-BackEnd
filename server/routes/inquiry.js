import express from "express";
import Inquiry from "../models/Inquiry.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newInquiry = new Inquiry(req.body);
    const saved = await newInquiry.save();
    res.status(200).json(saved);
  } catch (error) {
    res.status(500).json({ message: "Sorğu göndərilərkən xəta baş verdi", error });
  }
});

router.get("/", async (req, res) => {
  try {
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    res.status(200).json(inquiries);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Inquiry.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ message: "Sorğu tapılmadı" });
    res.status(200).json({ message: "Sorğu silindi" });
  } catch (error) {
    res.status(500).json({ message: "Sorğu silinərkən xəta baş verdi", error });
  }
});



// Update inquiry
// routes/inquiries.js
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // Dəyişdiriləcək sahələr
    const { name, email, phone, message } = req.body;

    const updated = await Inquiry.findByIdAndUpdate(
      id,
      { name, email, phone, message },
      { new: true } // yenilənmiş sənədi qaytarır
    );

    if (!updated) return res.status(404).json({ message: "Sorğu tapılmadı" });

    res.status(200).json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sorğunu yeniləyərkən xəta baş verdi", error });
  }
});



export default router;
