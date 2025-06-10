import { Request, Response } from "express";
import skillService from "../services/skill.service";

class SkillController {
  // add Skill Controller
  static async addSkill(req: Request, res: Response) {
    try {
      const { name, category, experience } = req.body;
      if (!name) {
        res.status(400).send("Skills Name is required");
        return;
      }
      if (!category) {
        res.status(400).send("Skill category is required");
        return;
      }
      if (!experience) {
        res.status(400).send("Skil experience is required");
        return;
      }
      const data = await skillService.addSkill(req.body);
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // get All skill
  static async getAllSkills(req: Request, res: Response) {
    try {
      const data = await skillService.getAllSkills();
      if (!data) {
        res.status(400).send("Data not found");
        return;
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // update Skill
  static async updateSkill(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = skillService.updateSkill(req.body, id);
      // validation if following skills not found
      if (!data) {
        res.status(404).send(`${id} is not found`);
        return;
      } else {
        res.status(200).json("Update Successfully");
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // get Single Skill
  static async getSingleSkill(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await skillService.getSingleSkill(id);
      if (!data) {
        res.status(400).send(`${id} skills is not found`);
        return;
      }
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // delete Skill
  static async deleteSkill(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await skillService.deleteSkill(id);
      if(!data) {
        res.status(404).send(`${id} skills is not found`)
        return;
      } else {
        res.status(200).send(`${id} skils is deleted successfully`)
      }
      res.json(data)
    } catch (error) {
        res.status(500).send(error)
    }
  }
}

export default SkillController;
