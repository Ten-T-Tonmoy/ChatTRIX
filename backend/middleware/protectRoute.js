import jwt from "jsonwebtoken";
import User from "../models/user.model";
import { json } from "express";
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({
        error: "Unauthorized ! access Denied",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({
        error: "Unauthorized ! access Denied",
      });
    }

    const decodedUser = await User.findById(decoded.userId).select("-password");
    if (!decodedUser) {
      return res.status(401).json({
        error: "Unauthorized ! access Denied",
      });
    }

    req.user = decodedUser;
    next();
  } catch (e) {
    console.log("Error protectRoute middleware", e);
    res.status(500).json({
      error: "Server error",
    });
  }
};

export default protectRoute;
