import express, { Router } from "express";
import AuthMiddleware from "../middleware/authMiddeware";
import UserController from "../controller/user.controller";
import roleMiddleware from "../middleware/roleMidleware";
import { SUPERADMIN } from "../constant/role";

const router: Router = express.Router();

router.route("/").get(AuthMiddleware.isLoggedIn, roleMiddleware(SUPERADMIN), UserController.getAllUser)
//dynamic route
router
  .route("/:id")
  .patch(AuthMiddleware.isLoggedIn, UserController.updatePassword);

export default router;
