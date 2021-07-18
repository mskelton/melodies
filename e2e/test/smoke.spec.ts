import { expect, test } from "@playwright/test"
import { S } from "../selectors"

test("loads the home page", async ({ page }) => {
  await page.goto("https://melodies-web.herokuapp.com")
  await expect(page).toMatchTitle("Home - Melodies")
  await expect(page).toMatchText(S.nav.title, "Melodies")
  await expect(page).toMatchText(S.pageTitle, "Home")
})

test("loads the collections page", async ({ page }) => {
  await page.goto("https://melodies-web.herokuapp.com/collections")
  await expect(page).toMatchTitle("Collections - Melodies")
  await expect(page).toMatchText(S.pageTitle, "Collections")
})
