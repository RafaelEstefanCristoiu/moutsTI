import Requests from '../../../classes/general/generalApi';
import utils from '../../../classes/utils/utils';
describe('POSTS Requests registry Tests', function () {
  it('POST Request Call - Success', function () {
    return Requests.createUserGeneralAuthentication().then(() => {
      cy.get('@userAuthentication').its('status').then((r) => {
          expect(r).to.be.equal(201);
          utils.validateHttpFailed(r);
        });
      cy.get('@userAuthentication').its('body').then((r) => {
          utils.validateField(r);
        });
      cy.get('@userAuthentication').its('body.message').then((r) => {
          const message = 'Cadastro realizado com sucesso';
          utils.validateField(r);
          cy.contains(message);
        });
      cy.get('@userAuthentication').its('body._id').then((r) => {
          utils.validateField(r);
        });
    });
  });
});
