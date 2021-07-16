import { Button, ButtonProps } from "@chakra-ui/react"
import React from "react"
import { Link, useMatch } from "react-router-dom"

export function NavButton({ to, ...props }: NavButtonProps) {
  const selected = useMatch(to)

  return (
    <Button
      as={Link}
      colorScheme="blue"
      h="9"
      to={to}
      variant={selected ? undefined : "ghost"}
      {...props}
    />
  )
}

export interface NavButtonProps extends ButtonProps {
  to: string
}
