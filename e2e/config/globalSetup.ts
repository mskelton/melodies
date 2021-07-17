import http from "http"

function requestListener(_: http.IncomingMessage, res: http.ServerResponse) {
  res.writeHead(200, { "Content-Type": "text/plain" })
  res.end("Hello World!")
}

export default async function globalSetup() {
  // We assume the user is running the dev server locally, so we don't need to
  // start the server.
  if (!process.env.CI) return

  const server = http.createServer(requestListener)
  await new Promise((resolve) => server.listen(resolve))

  return async () => {
    await new Promise((resolve) => server.close(resolve))
  }
}
