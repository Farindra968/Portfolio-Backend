import { NextFunction, Response } from "express"
import { IExtendRequest } from "../global"

const roleMiddleware = (role:string)=>{
    return (req:IExtendRequest, res:Response, next:NextFunction)=>{
        const User = req.user;
        if(User?.role.includes(role)) {
         next();
        } else {
        res.status(403).send("You are not allowed to access this route");
        }

    }
}

export default roleMiddleware;