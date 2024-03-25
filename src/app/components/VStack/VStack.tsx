import { forwardRef } from "react"
import Container from "./styled"

interface VStackProps {
  children: React.ReactNode | React.ReactNode[]
  p?: string
  m?: string
  bg?: string
  gap?: string
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  justifyContent?: string
  alignItems?: string
  flexGrow?: number
  onClick?: () => void
}

const VStack = forwardRef<HTMLDivElement, VStackProps>(
  (
    {
      children,
      p = "0px",
      m = "0px",
      gap = "0px",
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      maxHeight,
      bg,
      justifyContent,
      alignItems,
      flexGrow,
      onClick,
    },
    ref
  ) => {
    return (
      <Container
        $p={p}
        $m={m}
        $gap={gap}
        $bg={bg}
        $width={width}
        $height={height}
        $minWidth={minWidth}
        $minHeight={minHeight}
        $maxWidth={maxWidth}
        $maxHeight={maxHeight}
        $justifyContent={justifyContent}
        $alignItems={alignItems}
        $flexGrow={flexGrow}
        onClick={onClick}
        ref={ref}
      >
        {children}
      </Container>
    )
  }
)

VStack.displayName = "VStack"

export default VStack
