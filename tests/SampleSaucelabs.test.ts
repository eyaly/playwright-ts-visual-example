import { test, expect } from '@playwright/test';

test('Sample test using playwright', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  // Type in the username and password
  await page.fill('#user-name', 'standard_user'); // Using the id selector for the username
  await page.fill('#password', 'secret_sauce');

  // Click the login button
  await page.click('#login-button');

  // Verify the URL includes "inventory"
  await expect(page).toHaveURL(/.*inventory/);
  page.close();
});