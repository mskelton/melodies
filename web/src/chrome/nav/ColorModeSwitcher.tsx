import { useColorMode, useColorModeValue } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { FaMoon, FaSun } from "react-icons/fa"
import { NavIconButton } from "./NavIconButton"

export function ColorModeSwitcher() {
  const [t] = useTranslation("nav")
  const { colorMode, toggleColorMode } = useColorMode()
  const SwitchIcon = useColorModeValue(FaMoon, FaSun)

  return (
    <NavIconButton
      aria-label={t("color-mode-switch-label", { context: colorMode })}
      data-testid="color-mode-switch"
      icon={<SwitchIcon />}
      onClick={toggleColorMode}
    />
  )
}
