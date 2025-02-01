import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to Database");
  } catch (error) {
    console.log("Error Connecting DB", error.message);
  }
};

export default connectDB;
