const { body, validationResult } = require("express-validator");
const { SUPPORTED_SOURCES } = require("../config/source");

const sanitizeWatchedItem = [
  body("url").isURL().withMessage("Invalid URL").trim().escape(),

  body("source")
    .isIn(SUPPORTED_SOURCES)
    .withMessage(`Source must be one of: ${SUPPORTED_SOURCES.join(", ")}`)
    .trim()
    .escape(),

  body("targetPrice")
    .optional()
    .isFloat({ min: 0 })
    .withMessage("Target price must be a positive number"),

  body("active")
    .optional()
    .isBoolean()
    .withMessage("Active must be true or false"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = sanitizeWatchedItem;
