import express, { Router } from "express";
import CertificateController from "../controller/certificate.controller";

const router: Router = express.Router();

router.route("/").get(CertificateController.getAllCertificate);
router.route("/add").post(CertificateController.addCertificate);

// dynamic
router
  .route("/:id")
  .get(CertificateController.getSingeCertificate)
  .patch(CertificateController.updateCertificate)
  .delete(CertificateController.deleteCertificate);

export default router;
