
const productController = require("./controller/product.controller")
const express = require("express");
const app = express();
app.use(express.json());

app.use("/products",productController)

module.exports = app;