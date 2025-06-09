import express, { Router } from "express";
import skillController from "../controller/skill.controller";
const router: Router = express.Router();

router.route("/").get(skillController.getAllSkills);
router.route("/add").post(skillController.addSkill);

// dynamic route
router
  .route("/:id")
  .get(skillController.getSingleSkill)
  .patch(skillController.updateSkill)
  .delete(skillController.deleteSkill);

export default router;
