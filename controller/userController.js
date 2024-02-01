const UserModel = require("../model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//! User Registration
const Registration = async (req, res) => {
  const { name, email, password } = req.body;
  const profileImage = req.file;
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required.",
    });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name,
      email,
      password: hashedPassword,
      profile_image: profileImage ? profileImage.filename : undefined,
    });

    res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Registration failed",
      error: error.message,
    });
  }
};

//! User Login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Incorrect Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password || "");

    if (isMatch) {
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d",
      });

      res.status(200).json({
        success: true,
        message: "Login successful",
        token: token,
      });
    } else {
      res.status(401).json({
        success: false,
        message: "Incorrect Email or Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};

//! User Dashboard
const userProfile = async (req, res) => {
  try {
    const user = await UserModel.findOne({ email: req.user.email });

    if (user) {
      res.status(200).json({ success: true, user });
    } else {
      res.status(404).json({ success: false, message: "No user found" });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching user profile",
      error: error.message,
    });
  }
};

module.exports = {
  Registration,
  loginUser,
  userProfile,
};
