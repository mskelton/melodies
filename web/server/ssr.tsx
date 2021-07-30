import { renderToStringWithData } from "@apollo/client/react/ssr"
import { Middleware } from "koa"
import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { FilledContext } from "react-helmet-async"
import { createClient } from "./apollo"
import { Html } from "./components/Html"
import { ServerApp } from "./components/ServerApp"

export const ssr: Middleware = async (ctx) => {
  const client = createClient()
  const helmetContext = {} as FilledContext
  const root = await renderToStringWithData(
    <ServerApp client={client} ctx={ctx} helmetContext={helmetContext} />
  )

  const state = client.extract()
  const html =
    "<!DOCTYPE html>" +
    renderToStaticMarkup(
      <Html helmet={helmetContext.helmet} state={state}>
        {root}
      </Html>
    )

  ctx.body = html
}
