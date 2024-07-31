const express = require("express");
const {
  getCurrencies,
  getCurrencyBySymbol,
} = require("./controllers/currencies.controllers");
const {
  getUsers,
  getUserById,
  searchUsers,
} = require("./controllers/users.controllers");
const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res
    .header({
      "Content-type": "text/html",
    })
    .send("<h1>Currency Database</h1>");
});

app.get("/currencies", getCurrencies);

app.get("/currencies/:symbol", getCurrencyBySymbol);

app.get("/users", getUsers); //Returns all the user data

app.get("/users/:uuid", getUserById); //Returns the user object by finding the user based on login.uuid

app.get("/users/search", searchUsers); // ?gender=<string>&age=<number> → Returns the users filtered on the basis of gender and/or age

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
