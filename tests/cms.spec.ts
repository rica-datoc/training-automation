import { test, expect, Page } from '@playwright/test';

// comment out ENVIRONMENT_NAME="cms" on .env and add your own credentials in cms.json
const url = process.env.URL as string;
const user = process.env.USER as string;
const password = process.env.PASSWORD as string;

// declare page variable to be used on all test
let page: Page;

test.beforeAll(async ({ browser }) => {
    // create own page context
    const context = await browser.newContext();
    page = await context.newPage();

    // go to app
    await page.goto(url);
    await expect(page.locator('section.auth-wrapper')).toBeVisible()

    // initialize submit button
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

test('Companies: Verify components of Companies page', async () => {
    await page.locator('.companies-card').waitFor();
    // await expect(page.locator('.companies-card')).toBeVisible();
    const tabs = ['companies', 'retailers', 'keywords', 'categories', 'rules']

    // check navigation tabs on header
    for (let tab of tabs) {
        await expect(page.locator(`[index="admin-${tab}"]`)).toBeVisible();
    }

    // check that user info is visible
    await expect(page.locator('.user-info')).toBeVisible();
    // check that Add company button is present
    await expect(page.locator('[name="company-button-add"]')).toHaveText('Add Company');

    // check that components are visible
    // search field
    await expect(page.locator('[name="companies-input-main-list-search"]')).toBeVisible();
    // search button
    await expect(page.locator('[name="companies-button-main-list-search"]')).toBeVisible();
    // refresh button
    await expect(page.locator('[name="companies-button-main-list-refresh"]')).toBeVisible();
    // total rows
    await expect(page.locator('[name="companies-pagination-main-left"]')).toHaveText(/Total/);
    // pagination
    await expect(page.locator('[name="companies-pagination-main-right"]')).toBeVisible();

    // check that table headers are visible
    const headers = ['No.', 'ID', 'Code', 'Name', 'Active', 'Sync Status', 'Action']
    for (let header of headers) {
        await expect(page.locator(`th`).getByText(header)).toHaveText(header);
    }
});

test('Companies: Verify that User can access a Company ', async () => {
    const companyCode = '620'
    await page.locator('.companies-card').waitFor();
    await expect(page.locator('[name="companies-input-main-list-search"]')).toBeVisible();

    // search for company
    // await page.locator('[name="companies-input-main-list-search"]').fill('620');
    // await page.locator('[name="companies-button-main-list-search"]').click();
    await page.locator('[name="companies-input-main-list-search"]').click();
    await page.keyboard.type(companyCode);
    await page.keyboard.press('Enter');

    // check if edit button contains companyCode substring
    await expect(page.locator(`[href="/admin/companies/${companyCode}"]`)).toBeVisible();
    await page.locator(`[href="/admin/companies/${companyCode}"] button`).click();

    // check if url contains companyCode
    await expect(page).toHaveURL(new RegExp(companyCode));
})