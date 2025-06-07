import express, { Router } from "express"
import certificateController from "../controller/certificate.controller";

const router:Router = express.Router();


router.route("/").post(certificateController.addCertificate)


export default router;