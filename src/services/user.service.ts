import bcrypt from "bcrypt";
import User from "../models/user.model";
import { IUser } from "../global";

// get all user
const getAllUser = async()=>{
  return await User.findAll();
}
// update password
const updatePassword = async (data: IUser, id: any) => {
  //1. check user from id
  const user = await User.findOne({ where: { id: id } });
  // 2. if user not found
  if (!user) {
    throw { status: 404, message: "User not found" };
  }
  // 3. compare currentPassword from user password
  const isMatch = await bcrypt.compare(data.currentpassword, user.password);
  // 4. if currenPassword do not match  with user password
  if (!isMatch) {
    throw { status: 401, message: "Invalid Password" };
  }
  // 5. hash the new password 
  const hashPassword = await bcrypt.hash(data.password, 12);
  // 6. Save the new hasspassword 
  const update = await User.update(
    {
      password: hashPassword,
    },
    { where: { id } }
  );
  // 7. return success
  return {update, message: "Password Update Successfully"};
};

export default {getAllUser, updatePassword}