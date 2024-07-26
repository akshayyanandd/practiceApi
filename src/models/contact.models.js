import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: ["Name is required !!", true],
    unique: true,
  },
  phoneNumber: {
    type: Number,
    required: ["Phone Number is required !!", true],
  },
  email: {
    type: String,
    required: ["email is required !!", true],
  },
});

const contactModel = mongoose.model("contact", contactSchema);

export default contactModel;
