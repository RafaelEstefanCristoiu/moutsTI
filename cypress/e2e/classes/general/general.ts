import IGeneral from "../../interfaces/general/general.interface";
import login from "../login/login";
import users from "../users/users";
class Requests implements IGeneral {
  loginGeneralFailed() {
    return login.loginUserFailed();
  };
  loginGeneralFailedEmptyUser(pass: string) {
    return login.loginUserFailedUserEmpty(pass);
  };
  loginGeneralFailedEmptyPass(user: string) {
    return login.loginUserFailedPassEmpty(user);
  };
  userGeneralSucess() {
    return users.createUser();
  };
};
export default new Requests();
