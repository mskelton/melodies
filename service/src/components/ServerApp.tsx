import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client"
import { App } from "@melodies/web"
import React from "react"
import { StaticRouter } from "react-router-dom/server"

export default function ServerApp({ client, url }: ServerAppProps) {
  return (
    <StaticRouter location={url}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </StaticRouter>
  )
}

export interface ServerAppProps {
  client: ApolloClient<NormalizedCacheObject>
  url: string
}
