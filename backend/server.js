import express from "express";
const app = express();
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
//global variable config
import colors from "colors";
import productRoutes from "./routes/productRoutes.js ";

dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);

//start the server

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
      .yellow.bold
  )
);
