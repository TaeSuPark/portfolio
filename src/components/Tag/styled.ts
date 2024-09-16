import styled from "styled-components"

export const Container = styled.div<{ $color?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 8px;
  border-radius: 16px;
  background-color: ${({ $color }) => $color || "#2D2D2D"};
`
