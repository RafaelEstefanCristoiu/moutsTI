import ILogin from "../../interfaces/login/login.interface";
class RequestsLogin implements ILogin {
  loginUserFailed() {
    cy.get('[data-testid="email"]').should('be.empty');
    cy.get('[data-testid="senha"]').should('be.empty');
  };
  loginUserFailedUserEmpty(pass: string) {
    cy.get('[data-testid="email"]').should('be.empty');
    cy.get('[data-testid="senha"]').type(pass);
  };
  loginUserFailedPassEmpty(user: string) {
    cy.get('[data-testid="email"]').type(user);
    cy.get('[data-testid="senha"]').should('be.empty');
  };
};
export default new RequestsLogin();
