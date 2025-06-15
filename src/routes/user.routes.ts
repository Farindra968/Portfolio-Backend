import express, { Router } from "express";
import AuthMiddleware from "../middleware/authMiddeware";
import UserController from "../controller/user.controller";

const router:Router = express.Router();

router.route("/:id").patch(AuthMiddleware.isLoggedIn, UserController.updatePassword)

export default router;