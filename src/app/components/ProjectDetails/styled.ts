import styled from "styled-components"

export const Container = styled.div<{ hasBetween?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: ${({ hasBetween }) =>
    hasBetween ? "space-between" : "flex-start"};

  column-gap: 24px;
  overflow-x: auto;
`

export const Test = styled.div`
  display: flex;
  flex-direction: column;

  overflow-y: auto;
`
