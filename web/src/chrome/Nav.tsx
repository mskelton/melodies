import { Flex, Heading, HStack } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { NavButton } from "./NavButton"

export function Nav() {
  const [t] = useTranslation("nav")

  return (
    <Flex alignItems="center" px="6" py="4" shadow="md">
      <Heading fontSize="2xl" mr="10">
        Melodies
      </Heading>

      <HStack spacing="3">
        <NavButton to="/">{t("collections")}</NavButton>
        <NavButton to="/songs">{t("songs")}</NavButton>
        <NavButton to="/favorites">{t("favorites")}</NavButton>
      </HStack>
    </Flex>
  )
}
