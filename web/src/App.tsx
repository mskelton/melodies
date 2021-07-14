import React from "react"
import { Route, Routes } from "react-router-dom"
import Providers from "~/components/Providers"
import { CollectionsList } from "~/routes/collections/CollectionList"

export function App() {
  return (
    <Providers>
      <Routes>
        <Route element={<CollectionsList />} path="/" />
        {/* <Route element={<About />} path="about" /> */}
      </Routes>
    </Providers>
  )
}
