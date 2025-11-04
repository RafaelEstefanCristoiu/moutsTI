import General from '../../../../classes/general/general';
describe('Testing login users', function () {
  before(function () {
    let visit = cy.visit('/');
    return visit;
  });

  it('Testing login user failed all empty', function () {
    const data = ['Email é obrigatório', 'Password é obrigatório'];
    cy.intercept('https://serverest.dev/login').as('api');
    General.loginGeneralFailed();
    cy.get('[data-testid="entrar"]').click();
    cy.wait('@api');
    for (let index = 0; index < data.length; index++) {
      const validation = data[index];
      cy.contains(validation);
    };
  });
});
