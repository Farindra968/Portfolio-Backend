import { Request, Response } from "express";
import skillService from "../services/skill.service";

class skillController{
    // add Skill Controller
    static async addSkill(req:Request, res:Response) {
        try {
            const {name, category, experience,}= req.body
            if(!name) {
                res.status(400).send("Skills Name is required")
                return;
            }
            if(!category) {
                res.status(400).send("Skill category is required")
                return;
            }
            if(!experience) {
                res.status(400).send("Skil experience is required")
                return
            }

            const data = await skillService.addSkill(req.body)
            res.json(data)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default skillController;