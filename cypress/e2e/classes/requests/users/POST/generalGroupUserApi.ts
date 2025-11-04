import IGeneralGroupsApi from '../../../../interfaces/requests/users/POST/generalGroupUsersApi.interface';
class generalGroupsApi implements IGeneralGroupsApi {
  userGroup() {
    const userTests = [
      'cypress/e2e/QA/backend/registry/loginApi.CT001.cy.ts',
    ];
    return userTests;
  };
};
export default new generalGroupsApi();
