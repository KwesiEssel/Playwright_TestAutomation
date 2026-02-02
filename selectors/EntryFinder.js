/**
 * Utility-Klasse zum Finden von Einträgen im Dashboard
 */
export class EntryFinder {

    /**
     * Findet den Index eines Eintrags anhand des Line Text Inhalts
     * @param {import('@playwright/test').Page} page - Playwright Page Objekt
     * @param {string} selector - Selector für die Line Text Elemente
     * @param {string} searchText - Zu suchender Text
     * @returns {Promise<number>} Index des gefundenen Eintrags oder -1 wenn nicht gefunden
     */
    static async findEntryByLineText(page, selector, searchText) {
        const lineTextElements = await page.locator(selector).all();

        for (let i = 0; i < lineTextElements.length; i++) {
            const textContent = await lineTextElements[i].textContent();

            if (textContent && textContent.includes(searchText)) {
                return i;
            }
        }

        return -1;
    }
}