const Redis = require("ioredis");
const { SCRAPER_QUEUE_NAME } = require("../config/source");
const redis = new Redis("redis://localhost:6379");

async function enqueueScrapeJob(item) {
  console.log(item);
  const temp = {
    id: item._id.toString(),
    item: item.item,
    source: item.source,
    currency: item.currency,
    targetPrice: item.targetPrice,
    active: item.active,
  };
  await redis.lpush(SCRAPER_QUEUE_NAME, JSON.stringify(temp));
  console.log("QUEUED");
}

module.exports = enqueueScrapeJob;
