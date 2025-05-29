const express = require("express");
const router = express.Router();
const WatchedItem = require("../models/watcheditem");
const sanitizeWatchedItem = require("../middleware/sanitizeWatchedItem");


router.get("/", async (req, res) => {
  const items = await WatchedItem.find();
  res.json(items);
});

router.post("/", sanitizeWatchedItem, async (req, res) => {
  try {
    const item = await WatchedItem.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
