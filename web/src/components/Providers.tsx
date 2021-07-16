import { ApolloProvider } from "@apollo/client"
import { ChakraProvider, Spinner } from "@chakra-ui/react"
import React, { Suspense } from "react"
import { BrowserRouter } from "react-router-dom"
import { client } from "~/api/client"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>{children}</Suspense>
        </BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  )
}
