import { Flex, Heading, HStack } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { FaGithub } from "react-icons/fa"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { NavButton } from "./NavButton"
import { NavIconButton } from "./NavIconButton"

export function Nav() {
  const [t] = useTranslation("nav")

  return (
    <Flex justifyContent="space-between" px="6" py="4" shadow="md">
      <Flex alignItems="center">
        <Heading fontSize="2xl" mr="10">
          {t("app-name")}
        </Heading>

        <HStack spacing="3">
          <NavButton to="/">{t("collections")}</NavButton>
          <NavButton to="/songs">{t("songs")}</NavButton>
          <NavButton to="/favorites">{t("favorites")}</NavButton>
        </HStack>
      </Flex>

      <HStack spacing="2">
        <NavIconButton
          aria-label={t("open-github-repo")}
          as="a"
          fontSize="xl"
          href="https://github.com/mskelton/melodies"
          icon={<FaGithub />}
        />

        <ColorModeSwitcher />
      </HStack>
    </Flex>
  )
}
