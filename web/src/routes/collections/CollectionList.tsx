import { Alert, AlertIcon, SimpleGrid, Spinner } from "@chakra-ui/react"
import React from "react"
import { CollectionCard } from "./CollectionCard"
import { useCollections } from "./useCollections"

export function CollectionsList() {
  const { data, error, loading } = useCollections()

  return loading ? (
    <Spinner />
  ) : error ? (
    <Alert status="error">
      <AlertIcon />
      There was an error processing your request
    </Alert>
  ) : data ? (
    <SimpleGrid minChildWidth="120px" spacing="40px">
      {data.collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </SimpleGrid>
  ) : null
}
