import User from "../../models/user.model"
import bcrypt from "bcrypt"

const authRegister = async(data:any)=>{

    const existingUser = await User.findOne({where:{email: data.email}})

    if(existingUser) {
        throw {status: 409, message:"User already exist"}
    }

    const hashPassword = await bcrypt.hash(data.password, 12)
    const register = await User.create({
        username: data.username,
        password: hashPassword,
        email: data.email,
        
    })

    if(!register) {
        throw {status: 400, message: 'Registeration failed'}
    }

    return register;
}

export default {authRegister}