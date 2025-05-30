require("dotenv").config();
const express = require("express");
const db = require("./db/db");
const bodyParser = require("body-parser");
const { getAndScrapeWatchedItems } = require("./services/watchedItemService");
require("./models/watchedItem");

async function main() {
  const dbConn = db.connectDB();
  if (dbConn) getAndScrapeWatchedItems();
  const app = express();
  app.use(express.urlencoded({ extended: true, limit: "50mb" }));
  app.use(bodyParser.json());

  const watchedRoutes = require("./routes/watchedItems");
  app.use("/api/watched-items", watchedRoutes);

  const PORT = process.env.PORT || 8080;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

main();
