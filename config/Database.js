const mongoose = require("mongoose");

// TODO: Check the other options
const connectDB = async (MONGO_URI) => {
  try {
    await mongoose.set("strictQuery", false);
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true
    });
    console.log("Database connected.");
  } catch (error) {
    console.log("Failed to connect database.");
  }
};

module.exports = connectDB;