export interface Line {
  tabs?: string
  content: string
}

export interface Stanza {
  type: "verse" | "chorus" | "bridge"
  lines: Line[]
}

export interface Song {
  id: string
  title: string
  artist: string
  stanzas: Stanza[]
}
