import express, { Router } from "express";
import AuthController from "../controller/auth.controller";
import AuthMiddleware from "../middleware/authMiddeware";

const router:Router = express.Router()

router.route("/register").post(AuthController.authRegister)
router.route("/login").post(AuthController.authLogin)

//dynamic route
router.route("/:id").patch(AuthMiddleware.isLoggedIn, AuthController.updatePassword)


export default router