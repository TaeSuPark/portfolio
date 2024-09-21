import mainTheme from "@src/styles/mainTheme"
import styled from "styled-components"
import HStack from "../HStack/HStack"

export const HTabContainer = styled(HStack)<{ selected: boolean }>`
  padding: 12px 12px;
  border-right: 1px solid ${mainTheme.colors.thirdary};
  min-width: max-content;
  height: max-content;
  cursor: pointer;
  background-color: ${({ selected }) =>
    selected ? mainTheme.colors.primary : mainTheme.colors.secondary};
  border-top: ${(props) =>
    props.selected
      ? `2px solid ${mainTheme.colors["blue-main"]}`
      : `2px solid ${mainTheme.colors.secondary}`};
  border-bottom: ${(props) =>
    props.selected
      ? `1px solid ${mainTheme.colors.primary}`
      : `1px solid ${mainTheme.colors.thirdary}`};
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transition: background-color 0.1s;
  }
`

export const VTabContainer = styled.div<{ selected: boolean }>`
  width: inherit;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  background-color: ${mainTheme.colors.secondary};
  border-right: 1px solid ${mainTheme.colors.thirdary};
  border-left: ${(props) =>
    props.selected
      ? `2px solid ${mainTheme.colors["blue-main"]}`
      : `2px solid ${mainTheme.colors.secondary}`};
`

export const EmptyHTabContainer = styled.div`
  padding: 8px 16px;
  background-color: ${mainTheme.colors.secondary};
  border-bottom: 1px solid ${mainTheme.colors.thirdary};
  flex-grow: 1;
`

export const EmptyVTabContainer = styled.div`
  background-color: ${mainTheme.colors.secondary};
  border-right: 1px solid ${mainTheme.colors.thirdary};
  border-left: 2px solid ${mainTheme.colors.secondary};
  flex-grow: 1;
`
