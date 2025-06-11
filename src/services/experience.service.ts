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

//getAllExperience
const getAllExperience = async ()=>{
    return await Experience.findAll()
}

//getSingleExperience
const getSingleExperience = async(id:any) => {
    return await Experience.findByPk(id)
}

// deleteExperience
const deleteExperience = async(id:any)=>{
    return await Experience.destroy(id)
}

export default {addExperience, updateExperience, getAllExperience, getSingleExperience}