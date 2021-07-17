import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"

hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// Hot Module Replacement (HMR)
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
