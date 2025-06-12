import express, { Router } from "express";
import ExperienceControler from "../controller/experience.controller";

const router: Router = express.Router();

router.route("/").get(ExperienceControler.getAllExperience);
router.route("/add").post(ExperienceControler.addExperience);

// dynamic route
router
  .route("/:id")
  .get(ExperienceControler.getSingleExperience)
  .patch(ExperienceControler.updateExperience)

  router.route("/:id").delete(ExperienceControler.deleteExperience)
export default router;
