import jwt from "jsonwebtoken";
import envconfig from "../config/config";

interface IData{
    id: string
    username: string,
    email: string,
    role?: string
}

const jsonSign =(data:IData)=>{
    if(!envconfig.jsonSecret) {
        throw {
            status: 400, message: "JSON Secret Key is not found in env file"
        }
    }
    const jwtToken = jwt.sign(data, envconfig.jsonSecret, {expiresIn: 60*60})
    console.log(`Generater token is ${jwtToken}`)
    return jwtToken;
}

export {jsonSign}