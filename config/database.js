const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Connected to mongoDB database`);
  } catch (error) {
    console.log(`MongoDB connection error ${error}`);
  }
};

module.exports = connectDB;
