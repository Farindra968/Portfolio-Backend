import { NextFunction, Request, Response } from "express";
import { jwtVerify } from "../utils/jwtToken";
import jwt from "jsonwebtoken";
import envconfig from "../config/config";

interface IExtendRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
    userName: string | null;
  };
}

class AuthMiddleware {
  static async isLoggedIn(
    req: IExtendRequest,
    res: Response,
    next: NextFunction
  ) {
    const token = req.headers.cookie;
    console.log(`from middleware= ${token}`)
    if (!token) {
      res.status(401).send("User not authenticate");
      return;
    }
    const authToken = token.split("=")[1];
    console.log(`authtoken ====== ${authToken}`);
    
    // step 1 work : ✔
    // if(!envconfig.jsonSecret) {
    //     res.status(400).send("JSON Secret Key is not found in env file")
    //     return;
    // }
    // jwt.verify(authToken, envconfig.jsonSecret, (error, data:any)=>{
    //     if(error) {
    //         res.status(401).send("Invalid Token")
    //         return;
    //     }
    //     if(data) {
    //         req.user = data
    //         next()
    //     }

    // })

    // step 2 work: ✔
    jwtVerify(authToken)
      .then((data: any) => {
        if(data) {
            req.user = data
            next()
        }
      })
      .catch(() => {
        res.status(401).send(`Invalid Token`);
      });

  }
}

export default AuthMiddleware;
