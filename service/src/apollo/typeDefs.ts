import { gql } from "apollo-server-koa"

export const typeDefs = gql`
  type Line {
    tabs: String
    content: String
  }

  type Stanza {
    type: String
    lines: [Line]
  }

  type Song {
    id: String
    title: String
    artist: String
    stanzas: [Stanza]
  }

  type Collection {
    id: String
    title: String
    description: String
    image: String
    songs: [Song]
    songCount: Int
  }

  type Query {
    collections: [Collection]
    songs: [Song]
  }
`
