import { Request, Response } from "express";
import experienceService from "../services/experience.service";

class ExperienceControler {
  //add Experience controller
  static async addExperience(req: Request, res: Response) {
    try {
      const { position, company, startDate, currentlyWorking, endDate } =
        req.body;
      //validation
      if (!position) {
        res.status(400).send("Experience Position is required");
        return;
      }
      if (!company) {
        res.status(400).send("Company Name is required");
        return;
      }
      if (!startDate) {
        res.status(400).send("Started date is required");
        return;
      }
      if (currentlyWorking == false) {
        // if currentWorking is false then endDate is required
        if (!endDate) {
          res.status(400).send("Ending Date is required");
          return;
        }
      }
      const data = await experienceService.addExperience(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //update Experience
  static async updateExperience(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await experienceService.updateExperience(req.body, id);
      if (!data) {
        res.status(404).send("Experience is not found");
        return;
      } else {
        res.status(200).json(data);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // getAllExperience
  static async getAllExperience(req: Request, res: Response) {
    try {
      const data = await experienceService.getAllExperience();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // getSingleExperience
  static async getSingleExperience(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await experienceService.getSingleExperience(id);
      if (!data) {
        res.status(404).send("Request Experience is not found");
        return;
      }
      res.status(200).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // deleteExperience
  static async deleteExperience(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const data = await experienceService.deleteExperience(id);
      if (data === 0) {
        res.status(404).send(`${id} is not found`);
        return;
      }

      res.status(200).json({ message: `${id} is deleted successfully` });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default ExperienceControler;
