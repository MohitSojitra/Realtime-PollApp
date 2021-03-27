import mongoose from "mongoose";

export interface UserModel extends mongoose.Document {
  _id: mongoose.Types.ObjectId;
  userName: string;
  password: string;
  noOfOnlineUser: number;
}
