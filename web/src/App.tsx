import "./i18n"
import React from "react"
import { Route, Routes } from "react-router-dom"
import { PageContent } from "./chrome/PageContent"
import { Nav } from "./chrome/nav/Nav"
import { Chakra } from "./components/Chakra"
import { CollectionDetail } from "./routes/collections/detail/CollectionDetail"
import { CollectionsList } from "./routes/collections/list/CollectionList"
import { Home } from "./routes/home/Home"

export function App({ cookie }: AppProps) {
  return (
    <Chakra cookie={cookie}>
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
    </Chakra>
  )
}

export interface AppProps {
  cookie?: string
}
