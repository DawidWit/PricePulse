require("dotenv").config();
const express = require("express");
const db = require("./db/db");
require("./models/watcheditem");

async function main() {
  const dbConn = db.connectDB();

  const app = express();
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));

  const watchedRoutes = require("./routes/watcheditems");
  app.use("/api/watched-items", watchedRoutes);

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main();
