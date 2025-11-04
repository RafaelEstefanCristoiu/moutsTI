import Requests from '../../../classes/general/generalApi';
import utils from '../../../classes/utils/utils';
describe('POSTS Requests registry Tests', function () {
  it('POST Request Call - Failed - User is already registered', function () {
    return Requests.createUserGeneralAuthenticationFailed().then(() => {
      cy.get('@userAuthenticationFailed').its('status').then((r) => {
          expect(r).to.be.equal(400);
          utils.validateHttpSuccess(r);
        });
      cy.get('@userAuthenticationFailed').its('body').then((r) => {
          utils.validateField(r);
        });
      cy.get('@userAuthenticationFailed').its('body.message').then((r) => {
          const message = 'Este email já está sendo usado';
          utils.validateField(r);
          cy.contains(message);
        });
    });
  });
});
