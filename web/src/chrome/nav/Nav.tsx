import { Box, Flex, Heading, HStack, Icon } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { FaGithub, FaMusic } from "react-icons/fa"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { NavButton } from "./NavButton"
import { NavIconButton } from "./NavIconButton"

export function Nav() {
  const [t] = useTranslation("nav")

  return (
    <Flex justifyContent="space-between" px="6" py="4" shadow="md">
      <Flex alignItems="center">
        <Heading d="flex" fontSize="2xl" mr="10">
          <Icon as={FaMusic} color="blue.500" mt="1" />
          <Box ml="4">{t("app-name")}</Box>
        </Heading>

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
