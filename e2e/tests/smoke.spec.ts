import { expect, test } from "@playwright/test"

test("does something", async ({ page }) => {
  await page.goto("https://google.com")
  await expect(page).toMatchText(/Store/)
})
