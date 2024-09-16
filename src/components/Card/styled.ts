import styled from "styled-components"
import VStack from "../VStack/VStack"
import mainTheme from "@src/styles/mainTheme"

export const CardContainer = styled(VStack)`
  padding: 12px 24px;
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${mainTheme.colors.thirdary};
  &:hover {
    background-color: ${mainTheme.colors.fourthary};
    transition: background-color 0.2s;
  }
`

export const CardBottom = styled.div<{ $processing: boolean }>`
  display: flex;
  flex-direction: column;
  height: 5px;
  padding: 0 24px;
  border-radius: 12px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ${(props) =>
    props.$processing
      ? `background-image: linear-gradient(to right, ${mainTheme.colors["blue-main"]} 50%, #3f3f3f 50%);`
      : `background-color: ${mainTheme.colors["blue-main"]};`}
`
