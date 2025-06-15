import express, { Router } from "express";
import ExperienceControler from "../controller/experience.controller";
import AuthMiddleware from "../middleware/authMiddeware";
import roleMiddleware from "../middleware/roleMidleware";
import { SUPERADMIN } from "../constant/role";

const router: Router = express.Router();

router.route("/").get(ExperienceControler.getAllExperience);
router
  .route("/add")
  .post(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    ExperienceControler.addExperience
  );

// dynamic route
router
  .route("/:id")
  .get(ExperienceControler.getSingleExperience)
  .patch(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    ExperienceControler.updateExperience
  )
  .delete(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    ExperienceControler.deleteExperience
  );
export default router;
