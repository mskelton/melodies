import { createServer } from "./server"

async function main() {
  const app = await createServer()
  const port = process.env.PORT || 4000

  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`)
  })
}

main().catch(() => process.exit(1))
