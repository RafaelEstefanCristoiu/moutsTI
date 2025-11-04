import ITestGroupUser from "../../interfaces/users/usersGroup.interface";
class TestUsersGroup implements ITestGroupUser  {
  user() {
    const usersTests = [
      'cypress/e2e/QA/frontend/registry/tests/registry.CT001.cy.ts',
    ];
    return usersTests;
  };
};
export default new TestUsersGroup();