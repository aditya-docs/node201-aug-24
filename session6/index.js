const express = require("express");
require("dotenv").config();
// const dotenv = require("dotenv")
// dotenv.config();
const { errors } = require("celebrate");
const currencyRouter = require("./routes/currencies.routes");
const userRouter = require("./routes/users.routes");
const blogRouter = require("./routes/blogs.routes");
const connectDB = require("./db/config");
// const verifyAuth = require("./middlewares/verifyAuth");
const app = express();
const PORT = 8082;

connectDB();
app.use(express.json()); //parses the request body as JSON if and only if the Content-Type is application/json

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

app.use("/blogs", blogRouter);

app.use(errors());

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
