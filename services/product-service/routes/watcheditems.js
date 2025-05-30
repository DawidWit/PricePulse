const express = require("express");
const router = express.Router();
const WatchedItem = require("../models/watchedItem");
const sanitizeWatchedItem = require("../middleware/sanitizeWatchedItem");
const rateLimiter = require("../middleware/rateLimiter");

router.get("/", async (req, res) => {
  const items = await WatchedItem.find();
  res.json(items);
});

router.post("/", rateLimiter, sanitizeWatchedItem, async (req, res) => {
  try {
    const item = WatchedItem(req.body);
    await item.save();
    return res.status(200);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
