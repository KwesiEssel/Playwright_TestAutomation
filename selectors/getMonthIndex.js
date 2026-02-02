/*
Array Liste der Monate
 */
const months = [
    'January','February','March','April','May','June',
    'July','August','September','October','November','December'
];

/*
 Sucht nach dem String des Array, falls nicht dabei wird der Name als Fehler angezeigt
 */
export function getMonthIndex(monthName) {
    const index = months.indexOf(monthName);
    if (index === -1) throw new Error(`Unknown Month: ${monthName}`);
    return index;
}

/*
Nimmt sich den das Wort, prüft ob im Arry vorhanden, nimmt sich den Index und gibt den jeweiligen Wert zurück
 */
export async function readMonthIndex(page, monthSelector) {
    const monthLabel = page.locator(monthSelector);
    await monthLabel.waitFor({ state: 'visible' });

    const text = await monthLabel.textContent();
    if (!text) throw new Error('MONTH_NAME has no textContent (null/empty).');

    const monthName = text.trim().split(/\s+/)[0]; // "January 2026" -> "January"
    return getMonthIndex(monthName);
}
