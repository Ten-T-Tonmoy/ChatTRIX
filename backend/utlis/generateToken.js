import jwt from "jsonwebtoken";

// damn make sure when destructuring must have to be same name userId
const makeTokenWithCookie = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //miliseconds
    httpOnly: true, //only http accesible
    sameSite: "strict",
    secure: false,
    // secure: process.env.NODE_ENV !== "development",
    //later i will fix it
  });
};

export default makeTokenWithCookie;
