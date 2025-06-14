import express, { Router } from "express";
import ExperienceControler from "../controller/experience.controller";
import AuthMiddleware from "../middleware/authMiddeware";

const router: Router = express.Router();

router.route("/").get(ExperienceControler.getAllExperience);
router.route("/add").post(AuthMiddleware.isLoggedIn, ExperienceControler.addExperience);

// dynamic route
router
  .route("/:id")
  .get( ExperienceControler.getSingleExperience)
  .patch(ExperienceControler.updateExperience)
  .delete(ExperienceControler.deleteExperience);
export default router;
