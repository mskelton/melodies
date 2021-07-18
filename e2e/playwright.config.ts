import { expect, PlaywrightTestConfig } from "@playwright/test"
import { matchers } from "expect-playwright"

expect.extend(matchers)

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  globalSetup: "config/globalSetup.ts",
  projects: [
    { name: "smoke", testMatch: "smoke.spec.ts" },
    { name: "e2e", testIgnore: "smoke.spec.ts" },
  ],
  retries: process.env.CI ? 2 : 0,
  use: {
    screenshot: "only-on-failure",
    trace: "on-first-retry",
  },
}

export default config
