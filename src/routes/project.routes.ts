import express, { Router } from "express";
import ProjectController from "../controller/project.controller";

const router: Router = express.Router();

router.route("/").get(ProjectController.getAllProject);
router.route("/add").post(ProjectController.addProject);

//dynamic route
router
  .route("/:id")
  .patch(ProjectController.updateProject)
  .get(ProjectController.getSingleProject)
  .delete(ProjectController.deleteProject);

export default router;
