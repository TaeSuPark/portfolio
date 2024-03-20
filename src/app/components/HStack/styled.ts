import styled from "styled-components"

interface HStackStyledProps {
  $p: string
  $m: string
  $gap: string
  $bg?: string
  $justifyContent?: string
  $alignItems?: string
  $flexGrow?: number
}

const Container = styled.div<HStackStyledProps>`
  display: flex;
  flex-direction: row;
  column-gap: ${(props) => props.$gap};
  padding: ${(props) => props.$p};
  margin: ${(props) => props.$m};
  background-color: ${(props) => props.$bg};
  justify-content: ${(props) => props.$justifyContent};
  align-items: ${(props) => props.$alignItems};
  flex-grow: ${(props) => props.$flexGrow};
`
export default Container
