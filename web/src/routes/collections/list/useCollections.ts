import { gql, useQuery } from "@apollo/client"
import type { Collection } from "@melodies/api"

const query = gql`
  query GetCollections {
    collections {
      id
      title
      description
      image
      songCount
    }
  }
`

export type CollectionSummary = Pick<
  Collection,
  "id" | "title" | "description" | "image" | "songCount"
>

export interface GetCollectionsResponse {
  collections: CollectionSummary[]
}

export function useCollections() {
  return useQuery<GetCollectionsResponse>(query)
}
