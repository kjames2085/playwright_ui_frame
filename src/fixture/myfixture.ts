import { test as mytest } from "@playwright/test";
import Login from "../pages/Login";
import Launch from "../pages/Launch";
import Homepage from "../pages/Homepage";
import Logout from "../pages/Logout";
import ENV from "../../environment/env";

export const test = mytest.extend<{ launch: Launch, login: Login, homepage: Homepage, logout: Logout }>({
    launch: async ({ page }, use) => {
        const launch = new Launch(page);
        launch.launch(ENV.URL);
        await use(launch);
    },
    login: async ({ page }, use) => {
        await use(new Login(page));
    },
    homepage: async ({ page }, use) => {
        await use(new Homepage(page));
    },
    logout: async ({ page }, use) => {
        await use(new Logout(page));
    }


})