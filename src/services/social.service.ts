import Social from "../models/social.model"

interface ISocialLink {
    platform:string,
    url: string,
    icon?:string
}

// add SocialLink
const addSocialLink = async(data:ISocialLink)=>{
    return await Social.create({
        platform: data.platform,
        url: data.url,
        icon: data.icon || null
    })
}
// get All Social Links
const getAllSocial = async()=>{
    return await Social.findAll();
}

// get single Social Links
const getSingleSocial = async(id:any) =>{
    return await Social.findByPk(id)
}

// update Social
const updateSocial = async(data:ISocialLink, id:any)=>{
    return await Social.update(data, {where:{id:id}})
}

// delete Social
const deleteSocial = async (id:any) =>{
    return await Social.destroy(id)
}
export default {addSocialLink, getAllSocial, getSingleSocial, updateSocial, deleteSocial}