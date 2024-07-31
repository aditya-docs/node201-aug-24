import currenciesJSON from "../currencies.json" assert { type: "json" };

const getCurrencies = (req, res) => {
  const { min_value } = req.query;
  res.send(currenciesJSON.data.filter((curr) => curr.min_size === min_value));
};

const getCurrencyBySymbol = (req, res) => {
  const { symbol } = req.params;
  const reqCurr = currenciesJSON.data.find(
    (curr) => curr.id === symbol.toUpperCase()
  );
  if (reqCurr) return res.send(reqCurr);
  res.status(404).send({ message: "Invalid Symbol" });
};

export { getCurrencies, getCurrencyBySymbol };
