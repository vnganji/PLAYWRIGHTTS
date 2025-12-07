import {test,expect} from "@playwright/test";
import {googleHomePage} from "./pages";

test("first test", async ({page}) =>
{

     await page.goto("https://www.google.com");
     await expect(page).toHaveTitle("Google");
     

});



