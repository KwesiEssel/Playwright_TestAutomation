import { Page, expect } from '@playwright/test';

export async function selectFirstOption(page: Page) {
    // Dropdown muss bereits offen sein (oder du öffnest ihn davor)
    const listbox = page.getByRole('listbox');
    await expect(listbox).toBeVisible();

    const firstOption = listbox.getByRole('option').first();
    await firstOption.click();
}
