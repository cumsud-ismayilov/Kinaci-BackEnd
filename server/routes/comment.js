import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// 1️⃣ Yeni şərh əlavə et
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 2️⃣ Bütün şərhləri gətir (Admin panel üçün)
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 3️⃣ Xəbərə görə şərhləri gətir (NewsDetail səhifəsi üçün)
router.get("/news/:newsId", async (req, res) => {
  try {
    const comments = await Comment.find({ newsId: req.params.newsId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// 4️⃣ Şərhi sil
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ message: "Comment not found" });
    await comment.deleteOne();
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
