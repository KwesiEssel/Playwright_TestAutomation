// @ts-check
import { test, expect } from '@playwright/test';
import {login_selectors as Login} from "../selectors/login_selectors";
import { dashboard_selectors as Dashboard } from "../selectors/dashboard_selectors.js";

test('Rückmeldung erstellen und senden', async ({ page }) => {

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
    Rückmeldung erstellen, 1. "Kontierungsobjekt" auswählen
     */
    await page.locator(Dashboard.ACC_OBJECT).click();
    await page.keyboard.type('000');
    await page.waitForLoadState('networkidle');

    /*
     Dropdown muss und auf das Erste klicken
     */
    const listbox = page.getByRole('listbox');
    await expect(listbox).toBeVisible();
    await listbox.getByRole('option').first().click();

    /*
    REGULAR, muss Pflicht lesen
     */
    await page.click(Dashboard.TASK_COMPONENT);
    await page.waitForLoadState('networkidle');

    const listbox1 = page.getByRole('listbox');
    await expect(listbox1).toBeVisible();
    await expect(listbox1).toHaveText(/REGULAR/i);

    /*
     Line text schreiben
     */
    await page.click(Dashboard.LINETEXT);
    await page.keyboard.type('Testautomatisierung');

    /*
    Zeiten tragen
     */
    await page.click(Dashboard.DATEITEM);
    await page.keyboard.type('7');

    /*
    Senden
     */
    await page.click(Dashboard.SEND);

    /*
    Bestätigung
     */

});
