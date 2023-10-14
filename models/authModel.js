const mongoose = require("mongoose");


const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: ["user", "admin", "instructor"], // Specify the valid role values
      default: "user", // Default role is "user"
    },
    name: {
      type: String,
      required: function () {
        return this.role !== "user"; // Name is required for roles other than "user"
      },
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    phone: {
      type: String,
      required: [true, "phone number is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    // photo: {
    //   data: Buffer,
    //   contentType: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
