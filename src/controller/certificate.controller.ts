import { Request, Response } from "express";
import certificateService from "../services/certificate.service";

class CertificateController {
  // add Certificate Controller
  static async addCertificate(req: Request, res: Response) {
    try {
      const { certificateName, institute, startedDate, duration } = req.body;
      if (!certificateName) {
        res.status(400).send("Certificate Name is Required");
        return;
      }

      if (!institute) {
        res.status(400).send("Institute Name is required");
        return;
      }

      if (!startedDate) {
        res.status(400).send("Courses Started Date is required");
        return;
      }

      if (!duration) {
        res.status(400).send("Courses duration is Required");
        return;
      }

      const data = await certificateService.addCertificate(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // getAll Certificate Controller
  static async getAllCertificate(req: Request, res: Response) {
    try {
      const data = await certificateService.getAllCertificate();
      if (!data) {
        res.status(404).send("Certifiicate Data is not found");
        return;
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // get single certificate
  static async getSingeCertificate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await certificateService.getSingeCertificate(id);
      if (!data) {
        res.status(404).send(`${id} is not found`);
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // update controller
  static async updateCertificate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await certificateService.updateCertificate(req.body, id);
      if (!data) {
        res.status(404).send(`${id} is not found`);
        return;
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // delete certificate controller
  static async deleteCertificate(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await certificateService.deleteCertificate(id);
      if (data === 0) {
        res.status(400).send(`${id} is not found`);
        return;
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default CertificateController;
