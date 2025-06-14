import express, { Router } from "express";
import SocialController from "../controller/social.controller";


const router:Router = express.Router()

router.route("/add").post(SocialController.addSocialLink)

export default router;