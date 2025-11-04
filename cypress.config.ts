import { defineConfig } from "cypress";
import generalGroup from "./cypress/e2e/classes/general/generalGroup";
import generalGroupApi from "./cypress/e2e/classes/general/generalGroupApi";
const TestsGroup1 = generalGroup.generalGroupLogin();
const TestsGroup2 = generalGroup.generalGroupUser();
const TestsGroup3 = generalGroupApi.generalGroupUserApi();
const url = 'https://front.serverest.dev/login';
export default defineConfig({
  e2e: {
    baseUrl: url,
    specPattern: [
     ...TestsGroup1,
     ...TestsGroup2,
     ...TestsGroup3
    ],
  },
  chromeWebSecurity: false,
  requestTimeout: 20000,
  responseTimeout: 100000,
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 30000,
  execTimeout: 30000,
  taskTimeout: 30000,
});

