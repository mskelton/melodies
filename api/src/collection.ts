import { Song } from "./song"

export interface Collection {
  id: string
  title: string
  description: string
  songs: Song[]
}
