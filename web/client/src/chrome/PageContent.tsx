import { Box, BoxProps } from "@chakra-ui/react"
import React from "react"

export function PageContent(props: BoxProps) {
  return <Box as="main" m={6} {...props} />
}
