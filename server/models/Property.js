import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  city: String,
  location: String,
  rooms: String,
  size: String,
  squareMeter: String,
  baths: String,
  floor: Number,
  date: String,
  distanceOfSea: String,
  propertyType: String,        // Mənzillər, Villa və s.
  transactionType: String,     // Satışda / Kirayə
  price: String,
  citizenship: String,
  investment: String,
  residencePermit: String,
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
  infrastructure: [String],     // array
});

export default mongoose.model("Property", PropertySchema);
