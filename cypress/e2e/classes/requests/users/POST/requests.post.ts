import IRequestsPost from '../../../../interfaces/requests/users/POST/requests.post.interface';
import utils from '../../../utils/utils';
const api = 'https://serverest.dev/usuarios';
class RequestsPost implements IRequestsPost {
  userAuthentication() {
    const createUser = utils.randowCharacter(5);
    const email = `${utils.randowCharacter(5)}@hotmail.com`;
    const passwordRandom = `P@${utils.generateRandowNumber()}`;
    return cy.api({
        method: 'POST',
        url: `${api}`,
        body: {
          nome: `${createUser}`,
          email: `${email}`,
          password: `${passwordRandom}`,
          administrador: 'true',
        },
      }).then((response) => response.body.id).as('userAuthentication');
  };
};
export default new RequestsPost();
