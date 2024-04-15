import { test, expect } from '@playwright/test';

test("Login", async ({page}) => {
    // go to login page
    await page.goto('https://accounts.inriver-dsa.com/login')
    await expect(page).toHaveTitle('inriver | Product Visibility Online')

    // input email
    await page.locator('[placeholder="Email"]').fill('c10-normal@mailinator.com')
    // input password
    await page.locator('[placeholder="Password"]').fill('t154z2aMoB')
    // click sign-in
    await page.click('.btn-login');
    // verify if user is redirected to scorecard page
    await page.locator('section.score-card-wrapper').waitFor()
    await expect(page.locator('a[href="/score-card"]')).toBeVisible()

})