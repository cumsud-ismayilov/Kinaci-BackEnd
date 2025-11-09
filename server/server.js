import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";  
import userRoutes from "./routes/users.js";
import propertyRoutes from "./routes/properties.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/properties", propertyRoutes);
// ✅ MongoDB-ə qoşulma
mongoose.connect("mongodb+srv://csmayilov1_db_user:rHsIbn3MDaGSKxvl@kinacicluster.s5vgty3.mongodb.net/?appName=KinaciCluster")
  .then(() => console.log("✅ MongoDB Atlas-a uğurla qoşuldu"))
  .catch((err) => console.log("❌ Bağlantı xətası:", err));

app.listen(5000, () => {
  console.log("Server işə düşdü → http://localhost:5000");
});





// csmayilov1_db_user
// rHsIbn3MDaGSKxvl