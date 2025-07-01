const mongoose = require("mongoose");
const URI = process.env.URI;

const DBConnection = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ MongoDB connected successfully.");
  } catch (err) {
    console.log("Error connecting to mongodb:", err);
  }
};

module.exports = { DBConnection };
