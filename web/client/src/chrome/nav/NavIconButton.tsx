import { forwardRef, IconButton, IconButtonProps } from "@chakra-ui/react"
import React from "react"

export const NavIconButton = forwardRef<IconButtonProps, "button">(
  (props, ref) => (
    <IconButton
      ref={ref}
      color="gray.400"
      fontSize="lg"
      size="md"
      variant="ghost"
      {...props}
    />
  )
)
