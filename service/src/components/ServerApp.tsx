import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client"
import { App } from "@melodies/web"
import { Context } from "koa"
import React from "react"
import { StaticRouter } from "react-router-dom/server"
import { FilledContext, HelmetProvider } from "react-helmet-async"

export function ServerApp({ client, ctx, helmetContext }: ServerAppProps) {
  return (
    <StaticRouter location={ctx.url}>
      <ApolloProvider client={client}>
        <HelmetProvider context={helmetContext}>
          <App cookie={ctx.header.cookie ?? ""} />
        </HelmetProvider>
      </ApolloProvider>
    </StaticRouter>
  )
}

export interface ServerAppProps {
  client: ApolloClient<NormalizedCacheObject>
  ctx: Context
  helmetContext: FilledContext
}
