import { IUser } from "../global";

const userDataFormatter = (data: IUser) => {
  return {
    username: data.username,
    email: data.email,
    role: data.role,
    profilePicture: data.profilePicture,
  };
};

export default userDataFormatter;