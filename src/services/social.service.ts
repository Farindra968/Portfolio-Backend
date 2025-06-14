import Social from "../models/social.model"

interface ISocialLink {
    platform:string,
    url: string,
    icon?:string
}

const addSocialLink = async(data:ISocialLink)=>{
    return await Social.create({
        platform: data.platform,
        url: data.url,
        icon: data.icon || null
    })
}

const getAllSocial = async()=>{
    return await Social.findAll();
}

export default {addSocialLink, getAllSocial}