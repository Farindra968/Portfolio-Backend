import express, { Router } from "express";
import SocialController from "../controller/social.controller";

const router: Router = express.Router();

router.route("/").get(SocialController.getAllSocial);
router.route("/add").post(SocialController.addSocialLink);

//dynamic route
router
  .route("/:id")
  .get(SocialController.getSingleSocial)
  .patch(SocialController.updateSocial)
  .delete(SocialController.deleteSocial);

export default router;
