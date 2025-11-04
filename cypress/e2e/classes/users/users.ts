import IUsers from '../../interfaces/users/users.interface';
import utils from '../../classes/utils/utils';
class RequestsUsers implements IUsers {
  createUser() {
    const createUser = utils.randowCharacter(5);
    const passwordRandom = `P@${utils.generateRandowNumber()}`;
    const email = `${utils.randowCharacter(5)}@hotmail.com`;
    cy.get('[data-testid="nome"]').type(createUser);
    cy.get('[data-testid="email"]').type(email);
    cy.get('[data-testid="password"]').type(passwordRandom);
    cy.get('[data-testid="cadastrar"]').click();
  };
};
export default new RequestsUsers();
