import Skill from "../models/skill.model"

interface ISkillData {
    name: string,
    category: string, 
    experience: string,
    icon?: string,

}

// add skills
const addSkill = async(data:ISkillData) => {
    return await Skill.create({...data})
}

// get all Skills
const getAllSkills = async()=>{
    return await Skill.findAll()
}

// update skill
const updateSkill = async(data:ISkillData, id:any)=> {
    return await Skill.update(data, {where:{id:id}})
}

export default {addSkill, getAllSkills, updateSkill}