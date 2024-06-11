import { test, expect, Page } from '@playwright/test';

const url = process.env.URL as string;
const user = process.env.USER as string;
const password = process.env.PASSWORD as string;

let page: Page;

test.beforeAll(async ({ browser }) => {
    // create own page context
    const context = await browser.newContext();
    page = await context.newPage();

    // go to app
    await page.goto(url);
    await expect(page.locator('section.auth-wrapper')).toBeVisible()

    // declare submit button
    const signInBtn = page.locator('button.btn-login');

    // enter email
    await page.click('[placeholder="Email"]');
    await page.locator('[placeholder="Email"]').fill(user);

    // enter password
    await page.click('[placeholder="Password"]');
    await page.locator('[placeholder="Password"]').fill(password);

    // sign in
    await signInBtn.click();
});

test.afterAll(async () => {
    await page.close();
});
