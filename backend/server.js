import express from "express";
const app = express();
import products from "./data/products.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
//global variable config
import colors from "colors";
import productRoutes from "./routes/productRoutes.js ";
import userRoutes from "./routes/userRoutes.js";
import todoRoutes from "./routes/todoRoutes.js";
dotenv.config();
connectDB();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/todos", todoRoutes);
//start the server

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server running in port 5000".yellow.bold));
