import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB qoşulma
mongoose.connect("mongodb://127.0.0.1:27017/realestate")
  .then(() => console.log("✅ MongoDB qoşuldu"))
  .catch(err => console.log(err));

app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("Server işləyir ✅");
});

app.listen(5000, () => {
  console.log("🚀 Server işə düşdü → http://localhost:5000");
});

