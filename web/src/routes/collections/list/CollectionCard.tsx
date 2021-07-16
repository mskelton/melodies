import {
  Box,
  Heading,
  Image,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { CollectionSummary } from "./useCollections"

export function CollectionCard({ collection }: CollectionCardProps) {
  const [t] = useTranslation("collection-list")

  return (
    <LinkBox
      as="section"
      borderRadius="lg"
      borderWidth="1px"
      maxW="sm"
      overflow="hidden"
    >
      <Image alt={t("image-alt")} src={collection.image} w="100%" />

      <Box p="4">
        <Box
          color="gray.500"
          fontSize="xs"
          fontWeight="semibold"
          letterSpacing="wide"
          textTransform="uppercase"
        >
          {t("song-count", { count: collection.songCount })}
        </Box>

        <Heading fontWeight="semibold" isTruncated mb="2" mt="1" size="md">
          <LinkOverlay as={Link} to={`/collections/${collection.id}`}>
            {collection.title}
          </LinkOverlay>
        </Heading>

        <Text color="gray.600" fontSize="sm" noOfLines={2}>
          {collection.description}
        </Text>
      </Box>
    </LinkBox>
  )
}

export interface CollectionCardProps {
  collection: CollectionSummary
}
