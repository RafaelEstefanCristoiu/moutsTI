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
  userAuthenticationFailed() {
    const createUser = 'Fulano da Silva';
    const email = 'beltrano@qa.com.br';
    const password = 'Teste'
    return cy.api({
        method: 'POST',
        url: `${api}`,
        failOnStatusCode: false,
        body: {
          nome: `${createUser}`,
          email: `${email}`,
          password: `${password}`,
          administrador: 'true',
        },
      }).as('userAuthenticationFailed');
  };
  userAuthenticationFailedEmptyAdmin() {
    const createUser = 'Fulano da Silva';
    const email = 'beltrano@qa.com.br';
    const password = 'Teste'
    return cy.api({
        method: 'POST',
        url: `${api}`,
        failOnStatusCode: false,
        body: {
          nome: `${createUser}`,
          email: `${email}`,
          password: `${password}`
        },
      }).as('userAuthenticationFailedEmptyAdmin');
  };
};
export default new RequestsPost();
