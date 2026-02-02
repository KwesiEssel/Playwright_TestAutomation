// @ts-check
import {test} from '@playwright/test';
import {dashboard_selectors as Dashboard} from "../selectors/dashboard_selectors";
import {login_selectors as Login} from "../selectors/login_selectors";

test('Login and Logout | Tenant BAUT', async ({ page }) => {

    /*
    Login
    */
    await page.goto('https://app-dev-taap.azurewebsites.net/#/login', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');

    await page.click(Login.BENUTZERNAME);
    await page.keyboard.type('65700285');

    await page.click(Login.PASSWORD);
    await page.keyboard.type('Taap!1');

    await page.locator(Login.ANMELDEN_BUTTON).nth(1).click();

    /*
    Warten auf vollständigen Laden
    */
    await page.waitForLoadState('networkidle');

    /*
    Ausloggen
    */
    await page.click(Dashboard.PROFILEBUTTON);
    await page.click(Dashboard.LOGOUT);

});
