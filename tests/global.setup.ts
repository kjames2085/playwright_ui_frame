import {test} from "../src/fixture/myfixture";
import ENV from "../environment/env";

// test('Launch', async ({ page, launch}) => {
//   console.log(ENV.FLAG);
//   await launch.launch(ENV.URL);
// });

test('Login', async ({ page, launch,login }) => {
  //await launch.launch(ENV.URL);
  await login.login(ENV.USERNAME, ENV.PASSWORD);

});