const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Please login to access the resources",
      });
    }

    const isVerified = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!isVerified) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized access",
      });
    } else {
      req.user = await UserModel.findById(isVerified._id);
      next();
    }
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Please login again with correct credentials.",
    });
  }
};

module.exports = { isAuthenticated };
