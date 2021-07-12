import { listCollections } from "./collection"
import { listSongs } from "./song"

export const resolvers = {
  Collection: {
    songs: listSongs,
  },
  Query: {
    collections: listCollections,
    songs: listSongs,
  },
}
