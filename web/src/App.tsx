import "./i18n"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { PageContent } from "./chrome/PageContent"
import { Nav } from "./chrome/nav/Nav"
import { CollectionDetail } from "./routes/collections/detail/CollectionDetail"
import { CollectionsList } from "./routes/collections/list/CollectionList"
import { Home } from "./routes/home/Home"
import { theme } from "./styles/theme"

export function App() {
  return (
    <ChakraProvider theme={theme}>
      <Nav />
      <PageContent>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<CollectionsList />} path="/collections" />
          <Route
            element={<CollectionDetail />}
            path="/collections/:collectionId"
          />
        </Routes>
      </PageContent>
    </ChakraProvider>
  )
}
