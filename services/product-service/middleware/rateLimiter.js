const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 mins
  max: 50,
  message: "Too many requests, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = limiter;
