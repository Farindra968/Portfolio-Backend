import { Request, Response } from "express";
import certificateService from "../services/certificate.service";

class certificateController {
    static async addCertificate (req: Request, res:Response) {
        try {
            const {certificateName, institute, startedDate, duration }= req.body
            if(!certificateName) {
                res.status(400).send("Certificate Name is Required")
                return;
            }

            if(!institute) {
                res.status(400).send("Institute Name is required")
                return;
            }

            if(!startedDate) {
                res.status(400).send("Courses Started Date is required")
                return;
            }

            if(!duration) {
                res.status(400).send("Courses duration is Required")
                return;
            }

            const data = await certificateService.addCertificate(req.body)
            res.json(data)

        } catch (error) {
            res.status(500).send(error)
        }
        
    }
}

export default certificateController;