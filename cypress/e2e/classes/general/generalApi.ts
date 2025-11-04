import IGeneralApi from '../../interfaces/general/general.interface.api';
import users from '../requests/users/POST/requests.post';
class Requests implements IGeneralApi {
  createUserGeneralAuthentication() {
    return users.userAuthentication();
  };
};
export default new Requests();
