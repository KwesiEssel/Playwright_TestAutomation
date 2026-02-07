// @ts-check
import { test } from '@playwright/test';
import {dashboard_selectors as Dashboard} from "../selectors/dashboard_selectors";
import {login_selectors as Login} from "../selectors/login_selectors";
import {EntryFinder} from "../selectors/EntryFinder.js";

test('Rückmeldung löschen', async ({ page }) => {

    /*
    Login
    */
    await page.goto('https://example.com/login', { waitUntil: 'domcontentloaded' });
    await page.waitForLoadState('networkidle');
    await page.click(Login.BENUTZERNAME);
    await page.keyboard.type(Login.LOGIN_INPUT);

    await page.click(Login.PASSWORD);
    await page.keyboard.type(Login.PASSWORD_INPUT);

    await page.locator(Login.ANMELDEN_BUTTON).nth(1).click();

    /*
    Auf Dashboard navigieren und warten
    */
    await page.waitForURL('https://example.com', { timeout: 10000 }); // URL anpassen

    /*
    Warten auf ein eindeutiges Dashboard-Element:
    */
    await page.waitForSelector(Dashboard.DELETE, { timeout: 10000 });

    /*
    Rückmeldung mit "Testautomatisierung" im Line Text finden und löschen
    */
    const foundIndex = await EntryFinder.findEntryByLineText(page, Dashboard.LINETEXT, 'Testautomatisierung');

    /*
    Löschen und senden, wenn gefunden
    */
    if (foundIndex >= 0) {
        const deleteButtons = await page.locator(Dashboard.DELETE).all();
        await deleteButtons[foundIndex].click();
        await page.click(Dashboard.OK_Button);
        await page.click(Dashboard.SEND);
        console.log('Rückmeldung mit "Testautomatisierung" wurde gelöscht');
    } else {
        console.log('Keine Rückmeldung mit "Testautomatisierung" zum Löschen vorhanden');
    }

    /*
    Bestätigung
    */

});
