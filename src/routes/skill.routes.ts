import express, { Router } from "express";
import SkillController from "../controller/skill.controller";
const router: Router = express.Router();

router.route("/").get(SkillController.getAllSkills);
router.route("/add").post(SkillController.addSkill);

// dynamic route
router
  .route("/:id")
  .get(SkillController.getSingleSkill)
  .patch(SkillController.updateSkill)
  .delete(SkillController.deleteSkill);

export default router;
