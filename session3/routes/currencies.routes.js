const express = require("express");
const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("../controllers/currencies.controllers");

const router = express.Router();

router.post("/", getCurrencies);

router.post("/:symbol", getCurrencyBySymbol);

module.exports = router;
