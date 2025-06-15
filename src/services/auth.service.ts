import bcrypt from "bcrypt";
import User from "../models/user.model";

interface IUser {
  username: string;
  password: string;
  currentpassword: string;
  email: string;
  role?: "superAdmin" | "admin" | "User";
  profilePicture?: string;
}

const authRegister = async (data: IUser) => {
  const existingUser = await User.findOne({ where: { email: data.email } });

  if (existingUser) {
    throw { status: 409, message: "User already exist" };
  }

  const hashPassword = await bcrypt.hash(data.password, 12);
  const register = await User.create({
    username: data.username,
    password: hashPassword,
    email: data.email,
    role: data.role,
    profilePicture: data.profilePicture,
  });

  if (!register) {
    throw { status: 400, message: "Registeration failed" };
  }

  return register;
};

const authLogin = async (data: IUser) => {
  // 1. find email and password
  const user = await User.findOne({ where: { email: data.email } });
  // if email not found in database
  if (!user) {
    throw { status: 400, message: "User not found" };
  }

  // 2. compare user password with database encrypt password
  const comparePassword = await bcrypt.compare(data.password, user.password);
  // if user password and database password did not match
  if (!comparePassword) {
    throw { status: 400, message: "Invalid email or password" };
  }

  return user;
};

//update password
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
export default { authRegister, authLogin, updatePassword };
