import mongoose from "mongoose";
import axios from "axios";
import dotenv from "dotenv";
import News from "./models/News.js"; // News modelini import et

dotenv.config();

const MONGO_URI = process.env.DB_URL;
const MOCKAPI_URL = "https://68b1a825a860fe41fd5f2cac.mockapi.io/news?limit=1000"; // News MockAPI linki

// MongoDB-ə qoşul
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const importData = async () => {
  try {
    // Mövcud dataları sil (tam yenidən import üçün)
    await News.deleteMany({});
    console.log("News collection boşaldıldı.");

    // MockAPI-dən data çək
    const res = await axios.get(MOCKAPI_URL);
    const newsList = res.data;
    console.log(`MockAPI-dən ${newsList.length} record gəldi.`);

    // MongoDB-ə insert
    await News.insertMany(
      newsList.map((n) => ({
        id: n.id,
        newsImg: n.newsImg || "",
        newsMonth: n.newsMonth || "",
        newsDay: n.newsDay !== undefined && n.newsDay !== null ? Number(n.newsDay) : null,
        newsYear: n.newsYear !== undefined && n.newsYear !== null ? Number(n.newsYear) : null,
        newsTime: n.newsTime || "",
        title1: n.title1 || "",
        title2: n.title2 || "",
        title3: n.title3 || "",
      })),
      { ordered: false } // Bəzi sənədlərdə problem olsa da qalanları insert etsin
    );

    console.log("Bütün news MongoDB-ə uğurla əlavə edildi!");
    process.exit();
  } catch (err) {
    console.error("Xəta baş verdi:", err);
    process.exit(1);
  }
};

importData();
