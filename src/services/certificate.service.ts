import Certificate from "../models/certificate.model"

interface IDate  {
    certificateName:string, 
    institute:string, 
    startedDate:Date, 
    duration:string,
} 

const addCertificate = async(data:IDate)=>{
    const certificate = await Certificate.create({
        certificateName: data.certificateName,
        institute: data.institute,
        startedDate: data.startedDate,
        duration: data.duration
    })

    return certificate;
}

export default {addCertificate}