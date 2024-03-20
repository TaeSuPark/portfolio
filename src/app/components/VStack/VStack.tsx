import React from "react"
import Container from "./styled"

interface VStackProps {
  children: React.ReactNode | React.ReactNode[]
  p?: string
  m?: string
  bg?: string
  gap?: string
  justifyContent?: string
  alignItems?: string
  flexGrow?: number
}

const VStack: React.FC<VStackProps> = ({
  children,
  p = "0px",
  m = "0px",
  gap = "0px",
  bg,
  justifyContent,
  alignItems,
  flexGrow,
}) => {
  return (
    <Container
      $p={p}
      $m={m}
      $gap={gap}
      $bg={bg}
      $justifyContent={justifyContent}
      $alignItems={alignItems}
      $flexGrow={flexGrow}
    >
      {children}
    </Container>
  )
}

export default VStack
