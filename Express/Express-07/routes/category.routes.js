const express = require("express");
const Router = express.Router();
const bodyParser = require("body-parser");
const controller = require("../controllers/category.controller");
const middlewares = require("../middlewares/category.middlewares");

Router.use(bodyParser.json());
Router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

Router.get("/:id/books", middlewares.checkExists, controller.jobByCategory);
Router.post("/", controller.createCategory);
Router.put("/:id/", middlewares.checkExists, controller.updateCategory);
Router.delete("/:id", middlewares.checkExists, controller.deleteCategory);

module.exports = Router;
