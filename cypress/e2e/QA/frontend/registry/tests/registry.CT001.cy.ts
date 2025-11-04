import General from '../../../../classes/general/general';
describe('Testing create users', function () {
  before(function () {
    let visit = cy.visit('/');
    return visit;
  });
  
  it('Testing create user success', function () {
    const data = ['Serverest Store', 'Home', 'Lista de Compras', 'Carrinho'];
    cy.intercept('https://serverest.dev/*').as('api');
    cy.get('[data-testid="cadastrar"]').click();
    General.userGeneralSucess();
    cy.wait('@api');
    cy.contains('Cadastro realizado com sucesso');
    cy.wait('@api');
    for (let index = 0; index < data.length; index++) {
      const validation = data[index];
      cy.contains(validation);
    };
  });
});