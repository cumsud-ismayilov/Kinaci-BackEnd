import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    title: String,
    city: String,
    location: String,
    rooms: String,
    size: String,
    squareMeter: String,
    baths: {
      type: Number,
      default: null,
    },
    floor: Number,
    date: String, // istəyirsənsə Date tipinə çevirə bilərik
    distanceOfSea: String,
    propertyType: String,
    transactionType: String,
    price: String,
    citizenship: String,
    investment: String,
    residencePermit: String,

    // Images nested object
    images: {
      image1: String,
      image2: String,
      image3: String,
      image4: String,
      image5: String,
      image6: String,
      image7: String,
      image8: String,
    },

    // Infrastructure array
    infrastructure: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
