import IGeneralGroups from "../../interfaces/general/generalGroup.interface";
import TestLoginGroup from "../../classes/login/loginGroup";
import TestUserGroup from "../../classes/users/usersGroup";
class generalGroups implements IGeneralGroups {
  generalGroupLogin() {
    return TestLoginGroup.login();
  };
  generalGroupUser() {
    return TestUserGroup.user();
  };
};
export default new generalGroups();
