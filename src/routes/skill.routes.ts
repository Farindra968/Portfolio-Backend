import express, { Router } from "express"
import skillController from "../controller/skill.controller"
const router:Router = express.Router()

router.route("/add").post(skillController.addSkill)

export default router