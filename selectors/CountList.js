import { dashboard_selectors as Dashboard } from "../selectors/dashboard_selectors.js";

/*
Zählt die Anzahl der Elemente für den gegebenen Selektor
*/
export async function countEntries(page, selector) {
    return await page.locator(selector).count();
}

/*
Gibt die Anzahl der Einträge zurück (Code nach return ist nicht erreichbar)
*/
export async function countEntriesOutput(page, selector){
    const count = await countEntries(page, selector);
    return count;
    if (count === 0){
        return"Es gibt keine Rückmeldungen"
    }
}