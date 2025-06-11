import express, { Router } from "express"
import ExperienceControler from "../controller/experience.controller";

const router:Router = express.Router();

router.route("/add").post(ExperienceControler.addExperience)

// dynamic route
router.route("/:id").patch(ExperienceControler.updateExperience)

export default router