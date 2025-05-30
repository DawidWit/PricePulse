const mongoose = require("mongoose");

module.exports.connectDB = () => {
  try {
    const conn = mongoose.connect(process.env.DB_LOCAL_HOST);
    return conn;
  } catch (error) {
    console.error("connectDB error:", error);
    process.exit(1);
  }
};
