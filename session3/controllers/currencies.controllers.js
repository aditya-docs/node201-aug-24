const currenciesJSON = require("../currencies.json");

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  if (min_value)
    return res.send(
      currenciesJSON.data.filter((curr) => curr.min_size === min_value)
    );
  res.send(currenciesJSON.data);
};

const getCurrencyBySymbol = (req, res) => {
  const { symbol } = req.params;
  const reqCurr = currenciesJSON.data.find(
    (curr) => curr.id === symbol.toUpperCase()
  );
  if (reqCurr) return res.send(reqCurr);
  res.status(404).send({ message: "Invalid Symbol" });
};

module.exports = { getCurrencies, getCurrencyBySymbol };
