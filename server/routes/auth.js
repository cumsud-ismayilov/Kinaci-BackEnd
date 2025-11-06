import express from "express";
import User from "../models/users.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const exist = await User.findOne({ email });
  if (exist) return res.status(400).json({ message: "Email artıq mövcuddur" });
  await User.create({ name, email, password });
  res.json({ message: "Qeydiyyat uğurlu ✅" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "İstifadəçi tapılmadı ❌" });
  if (user.password !== password) return res.status(400).json({ message: "Şifrə yalnışdır ❌" });
  res.json({ message: "Daxil olundu ✅", user });
});

export default router;
