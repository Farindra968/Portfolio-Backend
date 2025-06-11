import express, { Router } from "express"
import ExperienceControler from "../controller/experience.controller";

const router:Router = express.Router();

router.route("/add").post(ExperienceControler.addExperience)

export default router