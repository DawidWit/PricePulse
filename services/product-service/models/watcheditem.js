const mongoose = require("mongoose");

const watchedItemSchema = new mongoose.Schema({
  url: { type: String, required: true },
  source: { type: String, required: true },
  targetPrice: Number,
  lastScrapedAt: Date,
  active: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model("WatchedItem", watchedItemSchema);