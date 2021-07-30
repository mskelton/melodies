import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { client } from "./api/client"
import { App } from "./components/App"

hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App client={client} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
