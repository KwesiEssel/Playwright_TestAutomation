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
    await page.keyboard.type(Login.LOGIN_INPUT);
    await page.click(Login.PASSWORD);
    await page.keyboard.type(Login.PASSWORD_INPUT);
    await page.locator(Login.ANMELDEN_BUTTON).nth(1).click();

    /*
    Warten auf vollständigen Laden
    */
    await page.waitForLoadState('networkidle');

    /*
    Line text schreiben
    */
    const emptyTextInputs = page.locator(Dashboard.LINETEXT2);
    const lastEmptyInput = emptyTextInputs.last();

    await lastEmptyInput.click();
    await lastEmptyInput.fill('Testautomatisierung');

    /*
    REGULAR, muss Pflicht lesen
    */
    const taskComponentDropdown = page
        .locator(Dashboard.REGULAR)
        .filter({ hasText: 'Select task component...' });
    await taskComponentDropdown.click();

    /*
    Warten bis Listbox sichtbar ist
    */
    const listbox1 = page.getByRole('listbox');
    await expect(listbox1).toBeVisible();
    await listbox1.getByText('REGULAR', { exact: true }).click();

    /*
    Rückmeldung erstellen, "Kontierungsobjekt" auswählen:
    immer das freie Feld mit Placeholder "Type to search..."
    */
    const accObjectPlaceholder = page
        .locator(Dashboard.ACC_OBJECT, { hasText: 'Type to search...' })
        .first();

    await expect(accObjectPlaceholder).toBeVisible();
    await accObjectPlaceholder.click();
    await page.keyboard.type('000');

    /*
    Dropdown: erstes Ergebnis klicken (Element-UI Dropdown Items)
    */
    const firstDropdownItem = page
        .locator(Dashboard.DROPDOWN)
        .first();

    await expect(firstDropdownItem).toBeVisible();
    await firstDropdownItem.click();
    await page.pause();
    /*
    Zeiten tragen
    */
    const dateItems = page.locator(Dashboard.DATEITEM);
    const count = await dateItems.count();
    const secondLastItem = dateItems.nth(count - 2);

    await secondLastItem.click();
    await page.keyboard.type('7');

    /*
    Senden
    */
    await page.click(Dashboard.SEND);

    /*
    Bestätigung
    */

});
