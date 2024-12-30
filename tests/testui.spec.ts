import { expect } from "@playwright/test";
import { test } from "../src/fixture/myfixture";
import Launch from "../src/pages/Launch";
import Login from "../src/pages/Login";
import Homepage from "../src/pages/Homepage";
import { testdata } from "../src/testdata/testdata";
import Logout from "../src/pages/Logout";
import jtestdata from "../src/testdata/testdata.json";
import ENV from "../environment/env";

// test('Launch', async ({ page, launch}) => {
//   console.log(ENV.FLAG);
//   await launch.launch(ENV.URL);
// });

// test('Login', async ({ page, login }) => {
//   await login.login(ENV.USERNAME, ENV.PASSWORD);

// });

test('Homepage 1', async ({ page, launch,homepage }) => {
  await homepage.homepage1();

});

test('Homepage 3', async ({ page,launch,homepage}) => {
  await homepage.homepage2();
});

