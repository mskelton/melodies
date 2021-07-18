import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { CollectionSummary } from "./useCollections"

export function CollectionCard({ collection }: CollectionCardProps) {
  const [t] = useTranslation("collection-list")
  const contentBg = useColorModeValue("white", "gray.700")
  const countColor = useColorModeValue("gray.500", "gray.400")
  const descriptionColor = useColorModeValue("gray.500", "gray.400")

  return (
    <LinkBox
      as="section"
      borderRadius="lg"
      borderWidth="1px"
      data-testid="collection-card"
      maxW="sm"
      overflow="hidden"
    >
      <Image alt={t("image-alt")} src={collection.image} w="100%" />

      <Box bg={contentBg} p="4">
        <Box
          color={countColor}
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          {t("song-count", { count: collection.songCount })}
        </Box>

        <Heading
          as="h1"
          fontWeight="semibold"
          isTruncated
          mb="2"
          mt="1"
          size="md"
        >
          <LinkOverlay as={Link} to={`/collections/${collection.id}`}>
            {collection.title}
          </LinkOverlay>
        </Heading>

        <Text color={descriptionColor} fontSize="sm" noOfLines={2}>
          {collection.description}
        </Text>
      </Box>
    </LinkBox>
  )
}

export interface CollectionCardProps {
  collection: CollectionSummary
}
