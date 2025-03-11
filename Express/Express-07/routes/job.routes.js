const express = require("express");
const Router = express.Router();
const controllers = require("../controllers/job.controller");
const bodyParser = require("body-parser");
const middlewares = require("../middlewares/job.middlewares");

Router.use(bodyParser.json());
Router.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

Router.get("/", middlewares.queryHandle, controllers.getAllJobs);
Router.get("/:id", controllers.getOneJob);
Router.get("/:id/skills", controllers.getJobSkills);
Router.post("/", middlewares.validateCreateJob, controllers.postJob);
Router.put("/:id", middlewares.validateUpdateJob, controllers.updateJob);
Router.delete("/:id", middlewares.validateUpdateJob, controllers.deleteJob);
Router.post("/test", controllers.jobExists);

module.exports = Router;
