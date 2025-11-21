import express from "express";
import User from "../models/users.js";
import bcrypt from "bcrypt";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;

    const exist = await User.findOne({ email });
    if (exist)
      return res.status(400).json({ message: "Email artıq mövcuddur" });

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ fullName, email, password: hashedPassword, phone });

    res.json({ message: "Qeydiyyat uğurlu " });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server xətası " });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email tapılmadı " });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Şifrə yanlışdır " });

    res.json({
      message: "Giriş uğurludur ✅",
      user: {
        _id: user._id,
        name: user.fullName, 
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server xətası " });
  }
});

export default router;
