const { SCRAPER_QUEUE_NAME } = require("../config/source");
const redis = require("../services/redisService");

async function enqueueScrapeJob(item) {
  try {
    if (!item || !item._id) throw new Error("Invalid item passed");
    const temp = {
      id: item._id.toString(),
      item: item.item,
      source: item.source,
      currency: item.currency,
      targetPrice: item.targetPrice,
      active: item.active,
    };
    await redis.lpush(SCRAPER_QUEUE_NAME, JSON.stringify(temp));
  } catch (error) {}
  console.log(item);

  console.log("QUEUED");
}

module.exports = enqueueScrapeJob;
