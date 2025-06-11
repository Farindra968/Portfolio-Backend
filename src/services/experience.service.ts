import Experience from "../models/experience.model"

interface IExperience {
    position: string,
    company: string,
    startDate: Date, 
    currentlyWorking: boolean, 
    endDate?: Date,
    location?: string,
    description?:string
}

// add experience
const addExperience= async(data:IExperience)=> {
    return await Experience.create({
        position: data.position,
        company: data.company,
        startDate: data.startDate,
        currentlyWorking: data.currentlyWorking,
        endDate: data.endDate,
        location: data.location,
        description: data.description
    })

}

// updateExperience
const updateExperience =async (data:IExperience, id:string) => {
    return await Experience.update(data, {where:{id:id}})
}

export default {addExperience, updateExperience}