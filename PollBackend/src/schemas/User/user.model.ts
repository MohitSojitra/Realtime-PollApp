import mongoose from "mongoose";
import { UserModel } from "./user.typedef";

/**
 * it is static. whenever we want to change userName and password at that time directly change in database.
 * noOfOnlineUser : it's for tracking online userCount, it will be change whenever user enter in site or leave site.
 */
const userSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    noOfOnlineUser: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.model<UserModel>("User", userSchema);
export { User };
