import { Alert, AlertIcon, Grid, Spinner } from "@chakra-ui/react"
import React from "react"
import { useTranslation } from "react-i18next"
import { CollectionCard } from "./CollectionCard"
import { useCollections } from "./useCollections"

export function CollectionsList() {
  const [t] = useTranslation("collection-list")
  const { data, error, loading } = useCollections()

  return loading ? (
    <Spinner />
  ) : error ? (
    <Alert status="error">
      <AlertIcon />
      {t("error-loading")}
    </Alert>
  ) : data ? (
    <Grid gap={6} templateColumns="repeat(auto-fill, minmax(250px, 1fr))">
      {data.collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </Grid>
  ) : null
}
