import express, { Router } from "express";
import AuthController from "../controller/auth.controller";

const router:Router = express.Router()

router.route("/register").post(AuthController.authRegister)
router.route("/login").post(AuthController.authLogin)


export default router