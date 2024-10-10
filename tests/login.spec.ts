import { test, expect } from '@playwright/test';
import { sauceVisualCheck } from '@saucelabs/visual-playwright';

test.beforeEach(async ({ page }, testInfo) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
})

test('loads the login page', async ({ page }, testInfo) => {
  await sauceVisualCheck(page, testInfo, "Before Login");
});

test('should be able to login with standard user', async ({ page }, testInfo) => {

  await page.fill('#user-name', process.env.VISUAL_CHECK ? 'visual_user' : 'standard_user'); // Using the id selector for the username
  await page.fill('#password', 'secret_sauce');
    // Click the login button
  await page.click('#login-button');

  await page.waitForURL('**\/inventory.html', { waitUntil: 'networkidle' });
  // for the video
  await page.waitForTimeout(2000);

  // await sauceVisualCheck(page, testInfo, "Inventory Page");
});

test('should not be able to login with a locked user', async ({ page }, testInfo) => {

      await page.fill('#user-name','locked_out_user');
      await page.fill('#password', 'secret_sauce');
      // Click the login button
      await page.click('#login-button');

      expect(page.url()).toMatch(/.*\/$/);
      await expect(page.getByTestId('error')).toContainText('Sorry, this user has been locked out.');
      // for the video
      await page.waitForTimeout(2000);

//   // await sauceVisualCheck(page, testInfo, "Locked User Error Message");
});