import styled from "styled-components"

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  gap: 16px;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #2d2d2d;
    transition: background-color 0.3s;
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 5px;
`
