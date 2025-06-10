import { Request, Response } from "express";
import projectService from "../services/project.service";

class projectController {
    
    // add project controller 
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
    };

    // update project controller
    static async updateProject (req:Request, res:Response) {
        try {
            const {id} = req.params;
            const data = await projectService.updateProject(req.body, id)
            if(!data) {
                res.status(404).send("Request project is not found")
                return;
            }
            res.status(200).json(data)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default projectController