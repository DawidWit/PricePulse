const WatchedItem = require("../models/watchedItem");
const enqueueScrapeJob = require("../queues/scraperQueue");

async function getAndScrapeWatchedItems() {
  const items = await WatchedItem.find();
  for (const item of items) {
    enqueueScrapeJob(item);
  }
}

module.exports = {
  getAndScrapeWatchedItems,
};
