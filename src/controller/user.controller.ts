import { Request, Response } from "express";
import { PASSWORD_REGEX } from "../constant/regex";
import userService from "../services/user.service";

class UserController {
      //update password controller
      // compulsory - current password, new password, confirm password
      static async updatePassword(req: Request, res: Response) {
        try {
          const { id } = req.params;
          const { currentpassword, password, confirmpassword } = req.body;
          //validation
          if (!currentpassword) {
            res.status(404).send("Current Password is required");
            return;
          }
          if (!password) {
            res.status(404).send("New Password is required");
            return;
          }
          // Password regex validation
          if (!PASSWORD_REGEX.test(password)) {
            res.status(400).json({
              message:
                "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character",
            });
            return;
          }
          if (!confirmpassword) {
            res.status(404).send("Confirm Pasword is required");
            return;
          }
          // check password & confirm password
          if (password !== confirmpassword) {
            res.status(404).send("Password and Confirm Password did not match");
          }
          const result = await userService.updatePassword(req.body, id)
          res.status(200).json(result)
        } catch (error) {
          res.status(500).send(error)
        }
      }
}

export default UserController