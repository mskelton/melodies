import { Alert, AlertIcon, Grid, Spinner } from "@chakra-ui/react"
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
    <Grid gap={6} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
      {data.collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </Grid>
  ) : null
}
