export interface IUser {
  username: string;
  password: string;
  currentpassword: string;
  email: string;
  role?: "superAdmin" | "admin" | "User";
  profilePicture?: string;
}