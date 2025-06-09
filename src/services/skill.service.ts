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

// get single Skills
const getSingleSkill = async(id:any) => {
    return await Skill.findByPk(id)
}

// delets single skill
const deleteSkill = async(id:any)=>{
    return await Skill.destroy(id)
}

export default {addSkill, getAllSkills, updateSkill, getSingleSkill, deleteSkill}