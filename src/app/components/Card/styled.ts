import styled from "styled-components"

interface CardStyledProps {}

export const Container = styled.div<CardStyledProps>`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;

  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #2f2f2f;

  &:hover {
    background-color: #3a3a3a;
    transition: background-color 0.3s;
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
      ? `background-image: linear-gradient(to right, #4277d0 50%, #3f3f3f 50%);`
      : `background-color: #4277d0;`}
`
