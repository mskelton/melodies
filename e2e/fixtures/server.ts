import { createServer } from "@melodies/service"
import { test as base } from "@playwright/test"
import { Server } from "http"

interface ServerWorkerFixtures {
  port: number
  serverURL: string
  server: Server
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const test = base.extend<{}, ServerWorkerFixtures>({
  port: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use, workerInfo) => {
      await use(3000 + workerInfo.workerIndex)
    },
    { scope: "worker" },
  ],
  server: [
    async ({ port }, use) => {
      const app = await createServer()
      let server: Server = null!

      // Listen on the port for the current worker
      await new Promise<void>((resolve) => {
        server = app.listen(port, resolve)
      })

      await use(server)
      await new Promise((resolve) => server.close(resolve))
    },
    { auto: true, scope: "worker" },
  ],
  serverURL: [
    async ({ port }, use) => {
      await use(`http://localhost:${port}`)
    },
    { scope: "worker" },
  ],
})

export const expect = test.expect
