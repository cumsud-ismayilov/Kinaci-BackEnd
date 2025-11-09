import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  role: { type: String, default: "User" },
  password: String,
});

export default mongoose.model("User", UserSchema);
