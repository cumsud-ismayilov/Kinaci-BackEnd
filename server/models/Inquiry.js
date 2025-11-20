import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
    },
    productId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Inquiry", InquirySchema);
