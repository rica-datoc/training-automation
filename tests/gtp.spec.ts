import { test, expect} from '@playwright/test';

const url = process.env.URL as string;
const pin = process.env.PIN as string;

test("GTP: Verify that user can login", async ({ page }) => {
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