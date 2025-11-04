import General from '../../../../classes/general/general';
describe('Testing login users', function () {
  before(function () {
    let visit = cy.visit('/');
    return visit;
  });

  it('Testing empty user email', function () {
    const data = 'Email é obrigatório';
    const pass = '123456';
    cy.intercept('https://serverest.dev/login').as('api');
    General.loginGeneralFailedEmptyUser(pass);
    cy.get('[data-testid="entrar"]').click();
    cy.wait('@api');
    cy.contains(data);
  });
});
