import styled, { keyframes } from "styled-components"

export const HoverContainer = styled.div<{ lineColor: string }>`
  display: flex;
  padding: 12px 24px;
  cursor: pointer;
  &:hover {
    // transition: 0.5s;
    background-color: #343434;
    padding: 11px 24px;
    border-bottom: 2px solid ${(props) => props.lineColor};
  }
`
