import { Request, Response } from "express";
import socialService from "../services/social.service";

class SocialController {
  // add social account link
  static async addSocialLink(req: Request, res: Response) {
    try {
      const { platform, url } = req.body;
      if (!platform) {
        res.status(400).send("Platform is required");
        return;
      }
      if (!url) {
        res.status(400).send("URL is required");
        return;
      }
      const data = await socialService.addSocialLink(req.body);
      if (!data) {
        res.status(400).send("Social Account is not create");
      } else {
        res.status(201).json(data);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // get all social account link
  static async getAllSocial(req: Request, res: Response) {
    try {
      const data = await socialService.getAllSocial();
      res.status(201).json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // get Single Social
  static async getSingleSocial(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await socialService.getSingleSocial(id);
      if (!data) {
        res.status(400).send("Social Link not found");
      } else {
        res.status(201).json(data);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }

  //update Social
  static async updateSocial(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await socialService.updateSocial(req.body, id);
      if (!data) {
        res.status(404).json({ message: "Request Socal Account Not found" });
        return;
      }
      res.status(201).json({ data, message: "Update Successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // delete Social
  static async deleteSocial(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await socialService.deleteSocial(id);
      if (!data) {
        res.status(404).json({ message: "Request Socal Account Not found" });
        return;
      }
      res.status(201).json({ data, message: "Update Successfully" });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default SocialController;
