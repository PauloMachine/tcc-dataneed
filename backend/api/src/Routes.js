const express = require("express");

const AuthMiddleware = require('./middlewares/AuthMiddleware');
const AuthController = require('./controllers/AuthController');
const SaleController = require("./controllers/SaleController");
const ProductController = require("./controllers/ProductController");

const routes = new express.Router();
routes.post("/auth", AuthController.find);
routes.get("/sale", AuthMiddleware, SaleController.find);
routes.get("/product", AuthMiddleware, ProductController.find);

module.exports = routes;
