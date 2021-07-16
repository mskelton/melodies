import React from "react"
import { Route, Routes } from "react-router-dom"
import { Nav } from "~/chrome/Nav"
import { PageContent } from "~/chrome/PageContent"
import Providers from "~/components/Providers"
import { CollectionsList } from "~/routes/collections/CollectionList"

export function App() {
  return (
    <Providers>
      <Nav />

      <PageContent>
        <Routes>
          <Route element={<CollectionsList />} path="/" />
          {/* <Route element={<About />} path="about" /> */}
        </Routes>
      </PageContent>
    </Providers>
  )
}
