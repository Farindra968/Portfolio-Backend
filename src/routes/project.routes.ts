import express, { Router } from "express";
import ProjectController from "../controller/project.controller";
import AuthMiddleware from "../middleware/authMiddeware";
import roleMiddleware from "../middleware/roleMidleware";
import { SUPERADMIN } from "../constant/role";

const router: Router = express.Router();

router.route("/").get(ProjectController.getAllProject);
router
  .route("/add")
  .post(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    ProjectController.addProject
  );

//dynamic route
router
  .route("/:id")
  .get(ProjectController.getSingleProject)
  .patch(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    ProjectController.updateProject
  )
  .delete(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    ProjectController.deleteProject
  );

export default router;
