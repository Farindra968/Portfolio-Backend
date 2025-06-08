import Skill from "../models/skill.model"

interface ISkillData {
    name: string,
    category: string, 
    experience: string,
    icon?: string,

}


const addSkill = async(data:ISkillData) => {
    return await Skill.create({...data})
}

export default {addSkill}