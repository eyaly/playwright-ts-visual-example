const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    // Default settings applied to all projects
    headless: false, // Run in headful mode (visible browser)
    launchOptions: {
      args: ["--start-maximized"], // Start browser maximized
    },
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'firefox',
      use: {
        browserName: 'firefox',
        viewport: null, // No predefined viewport
      },
    },
    {
      name: 'chrome',
      use: {
        browserName: 'chromium', // Chromium engine is used for Chrome
        viewport: null, // No predefined viewport
        channel: 'chrome', // This ensures it uses Google Chrome, not just Chromium
      },
    },
  ],
});
