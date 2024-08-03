const express = require("express");
require("dotenv").config();
// const dotenv = require("dotenv")
// dotenv.config();
const { errors } = require("celebrate");
const currencyRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/users.routes");
// const verifyAuth = require("./middlewares/verifyAuth");
const app = express();
const PORT = 8082;

app.get("/", (req, res) => {
  res
    .header({
      "Content-type": "text/html",
    })
    .send("<h1>Currency Database</h1>");
});

app.use("/currencies", currencyRouter);

// app.use(verifyAuth);

app.use("/users", userRouter);

app.use(errors());

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
