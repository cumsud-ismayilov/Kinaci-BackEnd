import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    newsImg: String,
    newsMonth: String,
    newsDay: Number,
    newsYear: Number,
    newsTime: String,
    title1: String,
    title2: String,
    title3: String,
  },
  { timestamps: true }
);

export default mongoose.model("News", NewsSchema);
