import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comment.js";
import contactRoutes from "./routes/contact.js";
import inquiryRoutes from "./routes/inquiry.js";
import dotenv from "dotenv";
dotenv.config();
console.log("SENDGRID KEY:", process.env.SENDGRID_API_KEY);
console.log("Loaded SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY ? "YES" : "NO");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/inquiries", inquiryRoutes);


mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Atlas-a uğurla qoşuldu"))
  .catch((err) => console.log("Bağlantı xətası:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server işə düşdü → http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send("API işləyir");
});



console.log("SENDGRID_API_KEY:", process.env.SENDGRID_API_KEY ? "OK" : "Missing");
console.log("MAIL_FROM:", process.env.MAIL_FROM ? "OK" : "Missing");
