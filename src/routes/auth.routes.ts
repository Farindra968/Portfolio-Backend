import express, { Router } from "express";
import authController from "../controller/auth.controller";

const router:Router = express.Router()

router.route("/register").post(authController.authRegister)
router.route("/login").post(authController.authLogin)


export default router