import { extendTheme, ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  useSystemColorMode: true,
}

export const theme = extendTheme({ config })
