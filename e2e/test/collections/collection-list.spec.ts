import { expect, test } from "fixtures/server"
import { S } from "selectors"

test("displays the collections page", async ({ page, serverURL }) => {
  await page.goto(`${serverURL}/collections`)
  await expect(page).toMatchTitle("Collections - Melodies")
  await expect(page).toMatchText(S.pageTitle, "Collections")
})
