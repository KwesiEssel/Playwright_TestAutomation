// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only - Test läuft bis zu 3x (1 original + 2 retries) */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: 1,

  /* Global timeout für gesamten Test (5 Minuten) */
  timeout: 5 * 60 * 1000,  // 5 Minuten pro Test

  /* Timeout für einzelne expect() Assertions */
  expect: {
    timeout: 10000,  // 10 Sekunden für Assertions
  },

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],  // Für Azure DevOps
    ['list']  // Zeigt Fortschritt in der Console
  ],


  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Timeout für einzelne Actions wie click, fill, etc. */
    actionTimeout: 30000,  // 30 Sekunden für einzelne Actions (erhöht von Standard 10s)

    /* Navigation Timeout */
    navigationTimeout: 60000,  // 60 Sekunden für Seitennavigation

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',  // Traces bei Fehlern behalten

    /* Screenshots bei Fehlern */
    screenshot: 'only-on-failure',

    /* Video bei Fehlern (optional - verbraucht mehr Speicher) */
    // video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});