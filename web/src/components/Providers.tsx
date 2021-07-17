// import { ApolloProvider } from "@apollo/client"
import { ChakraProvider } from "@chakra-ui/react"
import React from "react"
// import { client } from "../api/client"
import { theme } from "../styles/theme"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>{children}</ChakraProvider>
    // </ApolloProvider>
  )
}
