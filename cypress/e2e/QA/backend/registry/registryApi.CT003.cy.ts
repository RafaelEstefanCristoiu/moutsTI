import Requests from '../../../classes/general/generalApi';
import utils from '../../../classes/utils/utils';
describe('POSTS Requests registry Tests', function () {
  it('POST Request Call - Failed - Empty Admin', function () {
    return Requests.createUserGeneralAuthenticationFailedEmptyAdmin().then(() => {
      cy.get('@userAuthenticationFailedEmptyAdmin').its('status').then((r) => {
          expect(r).to.be.equal(400);
          utils.validateHttpSuccess(r);
        });
      cy.get('@userAuthenticationFailedEmptyAdmin').its('body').then((r) => {
          utils.validateField(r);
        });
      cy.get('@userAuthenticationFailedEmptyAdmin').its('body.administrador').then((r) => {
          const message = 'administrador é obrigatório';
          utils.validateField(r);
          cy.contains(message);
        });
    });
  });
});
