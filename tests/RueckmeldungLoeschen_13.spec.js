// @ts-check
import { test, expect } from '@playwright/test';
import {dashboard_selectors as Dashboard} from "../selectors/dashboard_selectors";
import {login_selectors as Login} from "../selectors/login_selectors";
import {countEntriesOutput} from "../selectors/CountList.js";

test('Rückmeldung löschen', async ({ page }) => {

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
    Auf Dashboard navigieren und warten
     */
    await page.waitForURL('https://app-dev-taap.azurewebsites.net/#/tenants/baut/confirmation/multi', { timeout: 10000 }); // URL anpassen

    /*
    Warten auf ein eindeutiges Dashboard-Element:
     */
    await page.waitForSelector(Dashboard.DELETE, { timeout: 10000 });

    /*
    Bestehende Rückmeldung löschen,2. User klickt auf Löschen Icon
     */
    const counter = await countEntriesOutput(page, Dashboard.DELETE);
    expect(counter).toBeGreaterThan(1);

    /*
     Löschen
     */
    if (counter > 0) {
        await page.click(Dashboard.DELETE);
        await page.click(Dashboard.OK_Button);
        await page.click(Dashboard.SEND);
    } else {
        console.log('Keine Rückmeldungen zum Löschen vorhanden');
    }

    //Dynamisch bauen mit nur Löschen wo Testautomatisierung löschen
    //Bestätigung
});
