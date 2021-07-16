import "./i18n"
import React from "react"
import { render } from "react-dom"
import { App } from "~/App"

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// Hot Module Replacement (HMR)
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
