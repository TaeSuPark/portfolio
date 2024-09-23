import mainTheme from "@src/styles/mainTheme"
import styled from "styled-components"
import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"

export const LinkContainer = styled(HStack)`
  cursor: pointer;
  &:hover > * {
    color: #5388e1;
  }
`

export const VHContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #242424;

  @media (min-width: 768px) {
    flex-grow: 1;
    align-items: center;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: 56px;
  }
`

export const MediaVStack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: column;
  row-gap: ${(props) => props.gap};
  flex-grow: 1;

  @media (min-width: 768px) {
    padding: 0 56px;
  }
`
