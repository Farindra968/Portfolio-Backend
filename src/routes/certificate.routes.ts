import express, { Router } from "express";
import CertificateController from "../controller/certificate.controller";
import AuthMiddleware from "../middleware/authMiddeware";

const router: Router = express.Router();

router.route("/").get(CertificateController.getAllCertificate);
router.route("/add").post(AuthMiddleware.isLoggedIn, CertificateController.addCertificate);

// dynamic
router
  .route("/:id")
  .get(CertificateController.getSingeCertificate)
  .patch(AuthMiddleware.isLoggedIn, CertificateController.updateCertificate)
  .delete(CertificateController.deleteCertificate);

export default router;
