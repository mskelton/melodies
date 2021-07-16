import React from "react"
import { Route, Routes } from "react-router-dom"
import { PageContent } from "~/chrome/PageContent"
import { Nav } from "~/chrome/nav/Nav"
import Providers from "~/components/Providers"
import { CollectionsList } from "~/routes/collections/CollectionList"

export function App() {
  return (
    <Providers>
      <Nav />

      <PageContent>
        <Routes>
          <Route element={<CollectionsList />} path="/" />
        </Routes>
      </PageContent>
    </Providers>
  )
}
