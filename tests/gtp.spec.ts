import { test, expect} from '@playwright/test';

// comment out ENVIRONMENT_NAME="gtp" on .env and add pin on gtp.json
const url = process.env.URL as string;
const pin = process.env.PIN as string;

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Validator Scoring Page: Access Validation Scoring Page using Validator Pin- Happy Path", async ({ page }) => {
    // go to app
    await page.goto(url);
    // wait for access form to load
    await page.locator('[aria-label="Enter PIN"]').waitFor();

    // enter pin
    await page.locator('[aria-label="Enter PIN"] [type="password"]').fill(pin);
    await page.locator('[aria-label="Enter PIN"] button').click();

    // wait for baseline scoring to load and verify templates tab to apear
    await page.locator('.baseline-scoring').waitFor();
    await expect(page.locator('#pane-templates')).toBeVisible();
});

// use {page} within async since most test cases are just logging in and verifying if the page is visible
test ('title', async ({page}) => {
    // insert code here
})