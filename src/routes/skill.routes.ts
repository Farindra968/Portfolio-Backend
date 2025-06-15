import express, { Router } from "express";
import SkillController from "../controller/skill.controller";
import AuthMiddleware from "../middleware/authMiddeware";
import roleMiddleware from "../middleware/roleMidleware";
import { SUPERADMIN } from "../constant/role";
const router: Router = express.Router();

router.route("/").get(SkillController.getAllSkills);
router
  .route("/add")
  .post(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    SkillController.addSkill
  );

// dynamic route
router
  .route("/:id")
  .get(SkillController.getSingleSkill)
  .patch(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    SkillController.updateSkill
  )
  .delete(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    SkillController.deleteSkill
  );

export default router;
