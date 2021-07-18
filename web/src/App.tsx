import "./i18n"
import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client"
import React from "react"
import { FilledContext, HelmetProvider } from "react-helmet-async"
import { Route, Routes } from "react-router-dom"
import { PageContent } from "./chrome/PageContent"
import { Nav } from "./chrome/nav/Nav"
import { Chakra } from "./components/Chakra"
import { CollectionDetail } from "./routes/collections/detail/CollectionDetail"
import { CollectionsList } from "./routes/collections/list/CollectionList"
import { Home } from "./routes/home/Home"

export function App({ client, cookie, helmetContext }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider context={helmetContext}>
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
      </HelmetProvider>
    </ApolloProvider>
  )
}

export interface AppProps {
  client: ApolloClient<NormalizedCacheObject>
  cookie?: string
  helmetContext?: FilledContext
}
