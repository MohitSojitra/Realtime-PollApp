import { USER_SUBSCRIPTION_TRIGGER } from "../../common/constant/common.subscription";
import { environment } from "../../environment";
import { pubSub } from "../../graphql/publisher";
import { User } from "../../schemas/User";
import { ValidationRepository } from "../validation/ValidationRepository";

class UserRepository {
  private static instance: UserRepository;

  /**
   *
   * Set initial username and password
   */
  public async setInitialPassword({
    userName,
    password,
    secret,
  }: {
    userName: string;
    password: string;
    secret: string;
  }) {
    // check for right cregential to set item
    if (ValidationRepository.getInstance().isRequestToSetInitalAdmin(secret)) {
      const user = await User.count({});
      if (user !== 0) {
        throw new Error("user name and password already set !!");
      }

      const newAdmin = new User({
        userName,
        password,
      });

      const admin = await newAdmin.save();
      if (!!!admin) {
        throw new Error("Something wrong!! can't save admin");
      }
      return;
    } else {
      throw new Error(
        "You have not right permition to set username and pasword!!",
      );
    }
  }

  /**
   * 
   * @param userName 
   * user enter site and increment user count
   */
  public async userEnterInSite(userName: string) {
    const user = await User.findOne({ userName });
    if (!!user) {
      user.noOfOnlineUser += 1;
      const u = await user.save();
      if (!!!u) {
        throw new Error("user count not updated");
      }
      pubSub.publish(USER_SUBSCRIPTION_TRIGGER.onlineCount, {
        userCount: user.noOfOnlineUser,
      });
    } else {
      throw new Error("Something wrong !!, cont not updated");
    }
  }

  /**
   * user leave site and decrement count
   * @param userName 
   */
  public async userLeaveInSite(userName: string) {
    const user = await User.findOne({ userName });
    if (!!user) {
      user.noOfOnlineUser -= 1;
      const u = await user.save();
      if (!!!u) {
        throw new Error("user count not updated");
      }
      pubSub.publish(USER_SUBSCRIPTION_TRIGGER.onlineCount, {
        userCount: user.noOfOnlineUser,
      });
    } else {
      throw new Error("Something wrong !!, cont not updated");
    }
  }

  /**
   *
   * Singelton Object for whole application, this class method acess threw this instance.
   */
  public static getInstance() {
    if (!UserRepository.instance) {
      UserRepository.instance = new UserRepository();
    }
    return UserRepository.instance;
  }
}

export { UserRepository };
