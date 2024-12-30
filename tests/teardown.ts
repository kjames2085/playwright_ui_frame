import {test} from "../src/fixture/myfixture";

test('Logout', async ({ page,launch,logout }) => {
    await logout.logout();
  
  });
  