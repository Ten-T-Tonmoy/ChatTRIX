import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import makeTokenWithCookie from "../utlis/generateToken.js";

//-----------------------------signUp----------------------------
export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmPassword, gender } = req.body;
    if (password != confirmPassword) {
      return res.status(400).json({
        error: "Unmatched Passwords",
      });
    }
    const Matcheduser = await User.findOne({ username });
    if (Matcheduser) {
      return res.status(400).json({
        error: "Username Already Taken",
      });
    }

    //hashing password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    //with await salt becomes string!

    const malePFP = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femalePFP = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new User({
      fullname,
      username,
      password: hashed,
      gender,
      profilePic: gender === "male" ? malePFP : femalePFP,
    });

    if (newUser) {
      await newUser.save();

      res.status(201).json({
        _id: newUser.id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({
        error: "Invalid User Data",
      });
    }
  } catch (error) {
    console.log("signup controller error", error.message);
    res.status(500).json({
      error: "Internal server failure",
    });
  }
};

//---------------------------------Login-------------------------------

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const typedUser = await User.findOne({ username });
    const passCorrect = await bcrypt.compare(
      password,
      typedUser?.password || ""
    );
    //order matters in compare
    if (!passCorrect || !typedUser) {
      return res.status(400).json({
        error: "Invalid Credentials",
      });
    }

    makeTokenWithCookie(typedUser._id, res);
    res.status(201).json({
      _id: typedUser._id,
      username: typedUser.username,
      fullname: typedUser.fullname,
      profilePic: typedUser.profilePic,
    });
  } catch (error) {
    console.log("login controller error", error.message);
    res.status(500).json({
      error: "Internal server failure",
    });
  }
};

//--------------------------------LogOut----------------------------

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({
      message: "Logging out Successfull",
    });
  } catch (error) {
    console.log("logOut controller error", error.message);
    res.status(500).json({
      error: "Internal server failure",
    });
  }
};
