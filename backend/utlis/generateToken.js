import jwt from "jsonwebtoken";

const makeTokenWithCookie =(userID, res) => {
  const token =jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 100, //miliseconds
    httpOnly: true, //only http accesible
    sameSite: "strict",
    secure: false,
    // secure: process.env.NODE_ENV !== "development",
    //later i will fix it
  });
};

export default makeTokenWithCookie;
