import styled from "styled-components"

export const OverflowHStack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  column-gap: ${({ gap }) => gap || "0"};
  overflow-x: auto;
  max-width: 55vw;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const VHStack = styled.div<{ gap?: string }>`
  display: flex;
  flex-direction: row;
  column-gap: ${({ gap }) => gap || "0"};

  @media (max-width: 768px) {
    flex-direction: column;
    row-gap: ${({ gap }) => gap || "0"};
  }
`
