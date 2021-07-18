import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client"
import { App } from "@melodies/web"
import React from "react"
import { StaticRouter } from "react-router-dom/server"
import { FilledContext, HelmetProvider } from "react-helmet-async"

export default function ServerApp({
  client,
  helmetContext,
  url,
}: ServerAppProps) {
  return (
    <StaticRouter location={url}>
      <ApolloProvider client={client}>
        <HelmetProvider context={helmetContext}>
          <App />
        </HelmetProvider>
      </ApolloProvider>
    </StaticRouter>
  )
}

export interface ServerAppProps {
  client: ApolloClient<NormalizedCacheObject>
  helmetContext: FilledContext
  url: string
}
