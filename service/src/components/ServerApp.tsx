import { ApolloProvider } from "@apollo/client"
import { App } from "@melodies/web"
import React from "react"
import { StaticRouter } from "react-router-dom/server"
import { createClient } from "../apollo/client"

export default function ServerApp({ url }: ServerAppProps) {
  return (
    <StaticRouter location={url}>
      <ApolloProvider client={createClient()}>
        <App />
      </ApolloProvider>
    </StaticRouter>
  )
}

export interface ServerAppProps {
  url?: string
}
