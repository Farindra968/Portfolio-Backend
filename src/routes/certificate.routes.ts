import express, { Router } from "express";
import CertificateController from "../controller/certificate.controller";
import AuthMiddleware from "../middleware/authMiddeware";
import roleMiddleware from "../middleware/roleMidleware";
import { ADMIN, SUPERADMIN } from "../constant/role";

const router: Router = express.Router();

router.route("/").get(CertificateController.getAllCertificate);
router
  .route("/add")
  .post(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    CertificateController.addCertificate
  );

// dynamic
router
  .route("/:id")
  .get(CertificateController.getSingeCertificate)
  .patch(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    CertificateController.updateCertificate
  )
  .delete(
    AuthMiddleware.isLoggedIn,
    roleMiddleware(SUPERADMIN),
    CertificateController.deleteCertificate
  );

export default router;
