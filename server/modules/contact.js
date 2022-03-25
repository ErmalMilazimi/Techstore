import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const uri = process.env.DB_URI;

mongoose.connect(uri, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to database");
  }
});

export const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { versionKey: false }
);

const Contact = mongoose.model("Contact", ContactSchema, "Contacts");
export default Contact;
