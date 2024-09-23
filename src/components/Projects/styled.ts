import styled from "styled-components"

export const OverflowContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-y: overlay;
  column-gap: 12px;
  padding: 20px;
  &::-webkit-scrollbar {
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: #2f2f2f;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: #777777;
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 10px;
    border: 5px solid #2f2f2f;
  }
`
