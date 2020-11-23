const express = require("express");
const app = express();
const products = require("./data/products");
const dotenv = require("dotenv");
dotenv.config();
app.get("/", (req, res) => {
  res.send("API is running");
});

//get all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

//get a single product
app.get("/api/products/:id", (req, res) => {
  const product = products.find((product) => product._id === req.params.id);
  res.json(product);
});
//start the server

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
);
