const express = require("express");
const UserRouter = express.Router();
const { isAuthenticated } = require("../middleware/isAuthenticated");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now().toString() + file.originalname);
  },
});
const upload = multer({ storage: storage });
const {
  Registration,
  loginUser,
  userProfile,
} = require("../controller/userController");

UserRouter.route("/").get((req, res, next) => {
  res.send("Welcome to backend server!");
});

//! Register
UserRouter.route("/register").post(
  upload.single("profile_image"),
  Registration
);

//! User Login
UserRouter.route("/login").post(loginUser);

//! user Dashboard
UserRouter.route("/profile").get(isAuthenticated, userProfile);

module.exports = UserRouter;
