import { environment } from "../../environment";
import { User } from "../../schemas/User";

class ValidationRepository {
  private static instance: ValidationRepository;

  /**
   * check request is valid for set admin
   * @param secret
   * @returns
   */
  public isRequestToSetInitalAdmin(secret: string) {
    return secret === environment.adminSecret;
  }

  /**
   * check request is valid for performing operation
   * @param secret
   * @returns
   */
  public isRequestTrue({
    userName,
    password,
    secret,
  }: {
    userName: string;
    password: string;
    secret: string;
  }) {
    if (secret === environment.adminSecret) {
      const user = User.findOne({ userName, password });
      if (!!!user) {
        return false;
      }
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * Singelton Object for whole application, this class method acess threw this instance.
   */
  public static getInstance() {
    if (!ValidationRepository.instance) {
      ValidationRepository.instance = new ValidationRepository();
    }
    return ValidationRepository.instance;
  }
}

export { ValidationRepository };
