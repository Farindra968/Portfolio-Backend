import { Request, Response} from "express";
import experienceService from "../services/experience.service";

class ExperienceControler{
    //add Experience controller
    static async addExperience(req:Request, res:Response) {
        try {
            const {position, company, startDate, currentlyWorking, endDate} =req.body
            //validation
            if(!position) {
                res.status(400).send("Experience Position is required")
                return; 
            }
            if(!company) {
                res.status(400).send("Company Name is required")
                return;
            }
            if(!startDate) {
                res.status(400).send("Started date is required")
                return;
            }
            if(currentlyWorking == false) { // if currentWorking is false then endDate is required
                if(!endDate) {
                    res.status(400).send("Ending Date is required")
                    return;
                } 
                return;
            }
            const data = await experienceService.addExperience(req.body)
            res.json(data)
        } catch (error) {
            res.status(500).send(error)
        }
    }
}

export default ExperienceControler