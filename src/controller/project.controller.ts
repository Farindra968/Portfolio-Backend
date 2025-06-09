import { Request, Response } from "express";
import projectService from "../services/project.service";

class projectController {
    static async addProject(req: Request, res: Response) {
        try {
            const { title, description, thumbnailUrl, technologies, category, tags } = req.body

            if (!title) {
                res.status(400).send("Project Title is Required")
                return;
            }

            if (!description) {
                res.status(400).send("Project description is Required")
                return;
            }

            if (!thumbnailUrl) {
                res.status(400).send("Project thumbnailUrl is Required")
                return;
            }

            if (!technologies) {
                res.status(400).send("Project technologies is Required")
                return;
            }

            if (!category) {
                res.status(400).send("Project category is Required")
                return;
            }

            if (!tags) {
                res.status(400).send("Project tags is Required")
                return;
            }

            const data = await projectService.addProject(req.body)
            res.json(data)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default projectController