const mongoose = require("mongoose");
const validator = require("validator");
const userSchema = new mongoose.Schema(
  {
    name: {
      required: [true, "Enter your name Plz"],
      type: String,
    },
    email: {
      required: true,
      type: String,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    profile_image: { type: String, required: true },
  },
  { timestamps: true }
);
const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
