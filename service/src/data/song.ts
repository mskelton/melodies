import { Song } from "@melodies/api"

export const songs: Song[] = [
  {
    artist: "John Newton",
    id: "amazing-grace",
    stanzas: [],
    title: "Amazing Grace",
  },
  {
    artist: "Kieth & Kristyn Getty",
    id: "speak-o-lord",
    stanzas: [
      {
        lines: [
          { content: "Speak O Lord as we come to you" },
          { content: "To receive the food of your Holy Word" },
          { content: "Take your truth, plant it deep in us" },
        ],
        type: "verse",
      },
      {
        lines: [
          { content: "Teach us Lord full obedience," },
          { content: "Holy reverence, true humility." },
          { content: "Test our thoughts and our attitudes" },
        ],
        type: "verse",
      },
    ],
    title: "Speak O Lord",
  },
]
