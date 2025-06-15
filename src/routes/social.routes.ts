import express, { Router } from "express";
import SocialController from "../controller/social.controller";
import AuthMiddleware from "../middleware/authMiddeware";
import roleMiddleware from "../middleware/roleMidleware";
import { SUPERADMIN } from "../constant/role";

const router: Router = express.Router();

router.route("/").get(SocialController.getAllSocial);
router.route("/add").post(AuthMiddleware.isLoggedIn, roleMiddleware(SUPERADMIN), SocialController.addSocialLink);

//dynamic route
router
  .route("/:id")
  .get(SocialController.getSingleSocial)
  .patch(AuthMiddleware.isLoggedIn, roleMiddleware(SUPERADMIN), SocialController.updateSocial)
  .delete(AuthMiddleware.isLoggedIn, roleMiddleware(SUPERADMIN), SocialController.deleteSocial);

export default router;
