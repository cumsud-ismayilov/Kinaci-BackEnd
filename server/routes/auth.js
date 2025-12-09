import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import { sendEmail } from "../utils/sendEmail.js";

const router = express.Router();

// JWT verification token helper
const createVerificationToken = (userId) =>
  jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "1d" });

// REGISTER
router.post("/register", async (req, res) => {
  try {
    const { fullName, email, password, phone } = req.body;

    const exist = await User.findOne({ email });
    if (exist)
      return res.status(400).json({ message: "Email artıq mövcuddur" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      phone,
      isVerified: false,
    });
    console.log("Register route çağırıldı", { fullName, email, phone });

    const verifyToken = createVerificationToken(newUser._id);
    const verifyLink = `${process.env.CLIENT_URL}/verify/${verifyToken}`;

    const html = `
      <h2>Hesab təsdiqi</h2>
      <p>Salam ${fullName},</p>
      <p>Hesabınızı təsdiqləmək üçün aşağıdakı linkə klik edin:</p>
      <a href="${verifyLink}">Hesabı təsdiqlə</a>
      <p>Link 24 saat ərzində etibarlıdır.</p>
    `;

    await sendEmail(email, "Hesabınızı təsdiqləyin", html);

    res.json({
      message:
        "Qeydiyyat uğurlu! Email-ə göndərilən link ilə hesabınızı təsdiqləyin.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server xətası" });
  }
});

// VERIFY
router.get("/verify/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.isVerified) return res.json({ message: "User already verified" });

    user.isVerified = true;
    await user.save();

    return res.json({ message: "Email uğurla təsdiqləndi" });
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: "Invalid or expired verification link" });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Email tapılmadı" });

    if (!user.isVerified)
      return res
        .status(403)
        .json({ message: "Zəhmət olmasa əvvəlcə Email-i təsdiqləyin" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Şifrə yanlışdır" });

    const token = jwt.sign(
      { id: user._id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Giriş uğurludur ✅",
      token,
      user: {
        _id: user._id,
        name: user.fullName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server xətası" });
  }
});

// TEST EMAIL
router.get("/test-email", async (req, res) => {
  try {
    const info = await sendEmail(process.env.MAIL_FROM, "Test Email", "<h1>Salam!</h1>");
    res.send("Email göndərildi ✅");
  } catch (err) {
    console.log("Email xətası:", err);
    res.status(500).send("Email göndərmək olmadı ❌");
  }
});






// FORGOT PASSWORD
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email daxil edin" });

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email tapılmadı" });

    // Şifrə bərpa token-i (30 dəqiqəlik)
    const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30m" });

    const resetLink = `${process.env.CLIENT_URL}/reset-password/${resetToken}`;



    const html = `
      <h2>Şifrə Bərpa</h2>
      <p>Salam ${user.fullName},</p>
      <p>Şifrənizi bərpa etmək üçün linkə klik edin:</p>
      <a href="${resetLink}">Şifrəni bərpa et</a>
      <p>Link 30 dəqiqə ərzində etibarlıdır.</p>
    `;

    await sendEmail(email, "Şifrə bərpa linki", html);

    return res.json({ message: "Şifrə bərpa linki email-ə göndərildi" });
  } catch (err) {
    console.log("Forgot password error:", err);
    return res.status(500).json({ message: "Server xətası" });
  }
});

// RESET PASSWORD
router.post("/reset-password/:token", async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    if (!password) return res.status(400).json({ message: "Yeni şifrə daxil edin" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ message: "User tapılmadı" });

    user.password = await bcrypt.hash(password, 10);
    await user.save();

    return res.json({ message: "Şifrəniz uğurla dəyişdirildi" });
  } catch (err) {
    console.log("Reset password error:", err);
    return res.status(400).json({ message: "Token etibarsız və ya müddəti bitmişdir" });
  }
});




export default router;
