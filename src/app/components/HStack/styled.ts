import styled from "styled-components"

interface HStackStyledProps {
  $p: string
  $m: string
  $gap: string
  $bg?: string
  $width?: string
  $height?: string
  $minWidth?: string
  $minHeight?: string
  $maxWidth?: string
  $maxHeight?: string
  $justifyContent?: string
  $alignItems?: string
  $flexGrow?: number
  $wrap?: boolean
}

const Container = styled.div<HStackStyledProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  min-width: ${(props) => props.$minWidth};
  min-height: ${(props) => props.$minHeight};
  max-width: ${(props) => props.$maxWidth};
  max-height: ${(props) => props.$maxHeight};
  column-gap: ${(props) => props.$gap};
  padding: ${(props) => props.$p};
  margin: ${(props) => props.$m};
  background-color: ${(props) => props.$bg};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-grow: ${(props) => props.$flexGrow};
  flex-wrap: ${(props) => (props.$wrap ? "wrap" : "nowrap")};
`
export default Container
