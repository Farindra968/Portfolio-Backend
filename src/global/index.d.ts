import { Request } from "express";

export interface IExtendRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
    userName: string | null;
  };
}


export interface IUser {
  username: string;
  password: string;
  currentpassword: string;
  email: string;
  role?: string;
  profilePicture?: string;
}

export interface IUserFormatter {
  username: string;
  email: string;
  role?: string;
  profilePicture?: string;
}