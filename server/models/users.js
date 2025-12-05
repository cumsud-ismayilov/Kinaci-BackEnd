import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  phone: String,
  role: { type: String, default: "User" },
  password: String,
  isVerified: { type: Boolean, default: false },
});

export default mongoose.model("User", UserSchema);
