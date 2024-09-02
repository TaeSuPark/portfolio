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
  $isShadow?: boolean
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
  box-shadow: ${(props) =>
    props.$isShadow
      ? "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.23)"
      : "none"};
`
export default Container
