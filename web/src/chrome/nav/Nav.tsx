import { Flex, Heading, HStack, Icon } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { FaGithub, FaMusic } from "react-icons/fa"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { NavButton } from "./NavButton"
import { NavIconButton } from "./NavIconButton"

export function Nav() {
  const [t] = useTranslation("nav")

  return (
    <Flex as="nav" justifyContent="space-between" px="6" py="4" shadow="md">
      <Flex alignItems="center">
        <Flex alignItems="center" mr="10">
          <Icon as={FaMusic} boxSize="6" color="blue.500" mt="1" />
          <Heading as="h1" fontSize="2xl" ml="4">
            {t("app-name")}
          </Heading>
        </Flex>

        <HStack spacing="3">
          <NavButton end to="/">
            {t("links.home")}
          </NavButton>
          <NavButton to="/collections">{t("links.collections")}</NavButton>
          <NavButton to="/songs">{t("links.songs")}</NavButton>
        </HStack>
      </Flex>

      <HStack spacing="2">
        <NavIconButton
          aria-label={t("open-github-repo")}
          as="a"
          fontSize="xl"
          href="https://github.com/mskelton/melodies"
          icon={<FaGithub />}
          target="_blank"
        />

        <ColorModeSwitcher />
      </HStack>
    </Flex>
  )
}
