import { test, expect } from '@playwright/test';
import { dashboard_selectors as Dashboard } from "../selectors/dashboard_selectors.js";
import { login_selectors as Login } from "../selectors/login_selectors.js";
import { readMonthIndex } from "../selectors/getMonthIndex.js";

test('Change month | Tenant BAUT', async ({ page }) => {
    await page.goto('https://app-dev-taap.azurewebsites.net/#/login', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    /*
    Login
    */
    await page.click(Login.BENUTZERNAME);
    await page.keyboard.type('65700285');
    await page.click(Login.PASSWORD);
    await page.keyboard.type('Taap!1');
    await page.locator(Login.ANMELDEN_BUTTON).nth(1).click();

    /*
    Warten auf vollständigen Laden
     */
    await page.waitForLoadState('networkidle');

    await page.pause()
    /*
    Prüfen auf den Monat
     */
    const beforeIndex = await readMonthIndex(page, Dashboard.MONTH_NAME);
    await page.click(Dashboard.RIGHTBUTTON_CALENDAR);

    const afterIndex = await readMonthIndex(page, Dashboard.MONTH_NAME);

    const expectedIndex = (beforeIndex + 1) % 12;
    expect(afterIndex).toBe(expectedIndex);
});
