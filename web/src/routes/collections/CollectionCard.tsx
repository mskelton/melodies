import { Box, Image, Text } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { CollectionSummary } from "./useCollections"

export function CollectionCard({ collection }: CollectionCardProps) {
  const [t] = useTranslation("collections")

  return (
    <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
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

        <Box as="h4" fontWeight="semibold" isTruncated mb="2" mt="1">
          {collection.title}
        </Box>

        <Text color="gray.600" fontSize="sm" noOfLines={2}>
          {collection.description}
        </Text>
      </Box>
    </Box>
  )
}

export interface CollectionCardProps {
  collection: CollectionSummary
}
