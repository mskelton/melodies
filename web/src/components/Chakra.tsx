import { ChakraProvider, cookieStorageManager } from "@chakra-ui/react"
import React from "react"
import { theme } from "../styles/theme"

export function Chakra({ children, cookie = document.cookie }: ChakraProps) {
  return (
    <ChakraProvider
      colorModeManager={cookieStorageManager(cookie)}
      theme={theme}
    >
      {children}
    </ChakraProvider>
  )
}

export interface ChakraProps {
  /**
   * The children to render inside the Chakra provider.
   */
  children: React.ReactNode
  /**
   * In server rendering contexts, this prop should be set to the cookie header
   * on the incoming request. In client side rendering contexts, this prop
   * is defaulted to the document cookie.
   * @default document.cookie
   */
  cookie?: string
}
