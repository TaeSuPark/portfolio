import styled from "styled-components"

interface CardStyledProps {
  $bg?: string
}

export const Container = styled.div<CardStyledProps>`
  display: flex;
  padding: 8px;
  border-radius: 16px;
  border: 1px solid #ffffff;
  background-color: ${(props) => props.$bg};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
`
