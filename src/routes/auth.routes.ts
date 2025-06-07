import express, { Router } from "express";
import authController from "../controller/auth/auth.controller";

const router:Router = express.Router()

router.route("/register").post(authController.authRegister)


export default router