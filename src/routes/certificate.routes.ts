import express, { Router } from "express";
import certificateController from "../controller/certificate.controller";

const router: Router = express.Router();

router.route("/").get(certificateController.getAllCertificate);
router.route("/add").post(certificateController.addCertificate);

// dynamic
router
  .route("/:id")
  .get(certificateController.getSingeCertificate)
  .patch(certificateController.updateCertificate)
  .delete(certificateController.deleteCertificate);

export default router;
