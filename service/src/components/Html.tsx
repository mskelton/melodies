import { NormalizedCacheObject } from "@apollo/client"
import React from "react"

export function Html({ children, state }: HtmlProps) {
  const sanitizedState = JSON.stringify(state).replace(/</g, "\\u003c")

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <meta
          content="Song book and instrument tabs when you are at home or on the go."
          name="description"
        />

        <title>Melodies</title>
      </head>
      <body>
        <div dangerouslySetInnerHTML={{ __html: children }} id="root" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${sanitizedState};`,
          }}
        />
        <script src="/dist/client.js" type="module" />
      </body>
    </html>
  )
}

export interface HtmlProps {
  children: string
  state: NormalizedCacheObject
}
