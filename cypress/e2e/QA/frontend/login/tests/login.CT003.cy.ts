import General from '../../../../classes/general/general';
describe('Testing login users', function () {
  before(function () {
    let visit = cy.visit('/');
    return visit;
  });

  it('Testing empty pass', function () {
    const data = 'Password é obrigatório';
    const email = 'testing@email.com';
    cy.intercept('https://serverest.dev/login').as('api');
    General.loginGeneralFailedEmptyPass(email);
    cy.get('[data-testid="entrar"]').click();
    cy.wait('@api');
    cy.contains(data);
  });
});
