import IGeneralGroupApi from '../../interfaces/general/generalGroupApi.interface';
import users from '../requests/users/POST/generalGroupUserApi';
class Requests implements IGeneralGroupApi {
  generalGroupUserApi() {
    return users.userGroup();
  };
};
export default new Requests();
