import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import contactRoutes from "./routes/contact.js";
import commentsRouter from "./routes/comment.js";
import inquiryRoute from "./routes/inquiry.js";
import dotenv from 'dotenv';
dotenv.config();



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/comments", commentsRouter);
app.use("/api/inquiry", inquiryRoute);


mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Atlas-a uğurla qoşuldu"))
  .catch((err) => console.log("Bağlantı xətası:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server işə düşdü → http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send("API işləyir");
});


// csmayilov1_db_user
// rHsIbn3MDaGSKxvl
