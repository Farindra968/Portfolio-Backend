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


const authLogin = async(data:any)=> {

    // 1. find email and password
    const user = await User.findOne({where: {email: data.email}})
    // if email not found in database
    if(!user) {
        throw {status:400, message: "User not found"}
    }
    
    // 2. compare user password with database encrypt password
    const comparePassword = await bcrypt.compare(data.password, user.password)
    // if user password and database password did not match
    if(!comparePassword) {
        throw {status:400, message: "Invalid email or password"}
    }

    return user;

}

export default {authRegister, authLogin}