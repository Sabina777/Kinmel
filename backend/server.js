const express = require("express");
const app = express();
const products = require("./data/products");
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
app.listen(5000, console.log("Server  running on port 5000"));
