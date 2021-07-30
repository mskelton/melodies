import React from "react"
import { Helmet } from "react-helmet-async"

export function Meta({ description, title }: MetaProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta content={description} name="description" />
    </Helmet>
  )
}

export interface MetaProps {
  title: string
  description: string
}
