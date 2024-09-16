import styled from "styled-components"

export const HorizontalLine = styled.div<{
  $color: string
  $height: string
}>`
  display: flex;
  width: 100%;
  height: ${(props) => props.$height};
  background-color: ${(props) => props.$color};
`
