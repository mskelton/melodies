import { ApolloProvider } from "@apollo/client"
import React from "react"
import { hydrate } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { App } from "./App"
import { client } from "./api/client"

hydrate(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// Hot Module Replacement (HMR)
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
