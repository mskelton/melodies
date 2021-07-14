import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import { client } from "~/api/client"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </ChakraProvider>
    </ApolloProvider>
  )
}
