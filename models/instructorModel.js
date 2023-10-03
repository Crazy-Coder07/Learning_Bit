const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      default: "instructor", // Default role is "instructor"
    },
    name: {
      type: String,
      required: [true,"Name is required"]
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
    },
    subjects: {
      type: String,
      required: [true, "Subject is required"],
    },
    experience: {
      type: Number,
      required: [true, "Experience is required"],
    },
    qualifications: {
      type: String,
      required: [true, "Qualifications is required"],
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Instructor", instructorSchema);
