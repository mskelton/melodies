import { createServer } from "../server/createServer"

async function main() {
  const app = await createServer()
  const port = process.env.PORT || 3000

  app.listen({ port }, () => {
    console.log(`🚀 Server ready at http://localhost:${port}`)
  })
}

main().catch(() => process.exit(1))
