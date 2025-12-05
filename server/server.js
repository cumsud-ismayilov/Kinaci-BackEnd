import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("MongoDB Atlas-a uğurla qoşuldu"))
  .catch((err) => console.log("Bağlantı xətası:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server işə düşdü → http://localhost:${PORT}`));

app.get("/", (req, res) => {
  res.send("API işləyir");
});
