import { Badge, Box, Image } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { CollectionSummary } from "./useCollections"

export function CollectionCard({ collection }: CollectionCardProps) {
  const [t] = useTranslation()
  const defaultImage = "https://picsum.photos/200"

  return (
    <Box borderRadius="lg" borderWidth="1px" maxW="sm" overflow="hidden">
      <Image
        alt={t("collection-image-alt")}
        src={collection.image ?? defaultImage}
      />

      <Box p="6">
        <Box alignItems="baseline" d="flex">
          <Badge borderRadius="full" colorScheme="teal" px="2">
            New
          </Badge>

          <Box
            color="gray.500"
            fontSize="xs"
            fontWeight="semibold"
            letterSpacing="wide"
            ml="2"
            textTransform="uppercase"
          >
            {t("collection-song-count", { count: collection.songCount })}
          </Box>
        </Box>

        <Box
          as="h4"
          fontWeight="semibold"
          isTruncated
          lineHeight="tight"
          mt="1"
        >
          {collection.title}
        </Box>

        <Box as="span" color="gray.600" fontSize="sm" ml="2">
          {collection.description}
        </Box>
      </Box>
    </Box>
  )
}

export interface CollectionCardProps {
  collection: CollectionSummary
}
