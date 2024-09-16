import styled from "styled-components"
import HStack from "../HStack/HStack"

export const ArrowContainer = styled(HStack)`
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.fourthary};
    transition: background-color 0.1s;
  }
`
