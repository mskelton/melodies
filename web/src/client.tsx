import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { client } from "./api/client"

hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App client={client} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
