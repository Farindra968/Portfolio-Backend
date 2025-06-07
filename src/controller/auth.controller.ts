import { Response, Request } from "express";
import { EMAIL_REGX, PASSWORD_REGEX } from "../constant/regex";
import authService from "../services/auth.service";
import { jsonSign } from "../utils/jwtToken";

class authController {
  //Auth Register controller
  static async authRegister(req: Request, res: Response) {
    try {
      const { username, email, password, confirmpassword } = req.body;

      // valiation
      if (!username || !email || !password || !confirmpassword) {
        res.status(400).json({ message: "All fields are required" });
        return;
      }
      if (!username) {
        res.status(400).json({ message: "Username is required" });
        return;
      }
      if (!email) {
        res.status(400).json({ message: "Email is required" });
        return;
      }
      if (!password) {
        res.status(400).json({ message: "Password is required" });
        return;
      }
      if (password !== confirmpassword) {
        res
          .status(400)
          .send({ message: "Password & Confirm Password do not match" });
        return;
      }
      // Email regex validation
      if (!EMAIL_REGX.test(email)) {
        res.status(400).json({ message: "Email is not valid" });
      }
      // Password regex validation
      if (!PASSWORD_REGEX.test(password)) {
        res.status(400).json({
          message:
            "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
        });
        return;
      }

      // Database
      const data = await authService.authRegister(req.body);
      const jwtToken = jsonSign({
        username: data.username,
        email: data.email,
        id: data.id,
        role: data.role,
      });
      res.cookie("authToken", jwtToken);
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  // Auth Login controller
  // compulsory - email & password = validation
  static async authLogin(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!email && !password) {
        res.status(400).json({ message: "Email & Password is required" });
        return;
      }
      const data = await authService.authLogin(req.body);
      const jwtToken = jsonSign({
        username: data.username,
        email: data.email,
        id: data.id,
        role: data.role,
      });
      res.cookie("authToken", jwtToken);
      console.log(jwtToken)
      res.json(data);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}

export default authController;
