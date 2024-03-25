import styled from "styled-components"

interface VStackStyledProps {
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
}

const Container = styled.div<VStackStyledProps>`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  min-width: ${(props) => props.$minWidth};
  min-height: ${(props) => props.$minHeight};
  max-width: ${(props) => props.$maxWidth};
  max-height: ${(props) => props.$maxHeight};
  row-gap: ${(props) => props.$gap};
  padding: ${(props) => props.$p};
  margin: ${(props) => props.$m};
  background-color: ${(props) => props.$bg};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-grow: ${(props) => props.$flexGrow};
`
export default Container
