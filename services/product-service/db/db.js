const mongoose = require("mongoose");

module.exports.connectDB = () => {
  try {
    const conn = mongoose.createConnection(process.env.DB_LOCAL_HOST);

    conn.on("connected", () => {
      console.log("MongoDB connected");
    });

    conn.on("error", (err) => {
      console.error("MongoDB connection error:", err);
    });

    return conn;
  } catch (error) {
    console.error("connectDB error:", error);
    process.exit(1);
  }
};
