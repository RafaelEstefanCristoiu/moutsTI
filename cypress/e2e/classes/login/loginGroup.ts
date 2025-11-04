import ITestGroupLogin from "../../interfaces/login/loginGroup.interface";
class TestLoginGroup implements ITestGroupLogin {
  login() {
    const loginTests = [
      'cypress/e2e/QA/frontend/login/tests/login.CT001.cy.ts',
      'cypress/e2e/QA/frontend/login/tests/login.CT002.cy.ts',
      'cypress/e2e/QA/frontend/login/tests/login.CT003.cy.ts',
    ];
    return loginTests;
  };
};
export default new TestLoginGroup();
