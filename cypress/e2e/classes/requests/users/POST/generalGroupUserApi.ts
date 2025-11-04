import IGeneralGroupsApi from '../../../../interfaces/requests/users/POST/generalGroupUsersApi.interface';
class generalGroupsApi implements IGeneralGroupsApi {
  userGroup() {
    const userTests = [
      'cypress/e2e/QA/backend/registry/registryApi.CT001.cy.ts',
      'cypress/e2e/QA/backend/registry/registryApi.CT002.cy.ts',
      'cypress/e2e/QA/backend/registry/registryApi.CT003.cy.ts'
    ];
    return userTests;
  };
};
export default new generalGroupsApi();
