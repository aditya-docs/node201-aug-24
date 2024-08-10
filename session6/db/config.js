const mongoose = require("mongoose");
const MONGODB_URI = "mongodb://127.0.0.1:27017/website";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to DB", error);
  }
};

module.exports = connectDB;
