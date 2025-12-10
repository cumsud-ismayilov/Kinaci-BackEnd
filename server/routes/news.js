import express from "express";
import News from "../models/News.js";

const router = express.Router();

// GET all news
router.get("/", async (req, res) => {
  try {
    const newsList = await News.find().sort({ newsYear: -1, newsMonth: -1, newsDay: -1 });
    res.json(newsList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "News fetch error" });
  }
});

// GET single news by id
router.get("/:id", async (req, res) => {
  try {
    const news = await News.findOne({ id: req.params.id });
    if (!news) return res.status(404).json({ message: "News not found" });
    res.json(news);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "News fetch error" });
  }
});

// POST add new news
router.post("/", async (req, res) => {
  try {
    const newNews = new News(req.body);
    await newNews.save();
    res.status(201).json(newNews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Add news failed" });
  }
});

// PUT update news
router.put("/:id", async (req, res) => {
  try {
    const updatedNews = await News.findOneAndUpdate({ id: req.params.id }, req.body, { new: true });
    if (!updatedNews) return res.status(404).json({ message: "News not found" });
    res.json(updatedNews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Update news failed" });
  }
});

// DELETE news
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await News.findOneAndDelete({ id: req.params.id });
    if (!deleted) return res.status(404).json({ message: "News not found" });
    res.json({ message: "News deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Delete news failed" });
  }
});

export default router;
