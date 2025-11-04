import IGeneralApi from '../../interfaces/general/general.interface.api';
import users from '../requests/users/POST/requests.post';
class Requests implements IGeneralApi {
  createUserGeneralAuthentication() {
    return users.userAuthentication();
  };
  createUserGeneralAuthenticationFailed() {
    return users.userAuthenticationFailed();
  };
  createUserGeneralAuthenticationFailedEmptyAdmin() {
    return users.userAuthenticationFailedEmptyAdmin();
  };
};
export default new Requests();
