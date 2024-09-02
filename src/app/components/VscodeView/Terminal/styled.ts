import styled from "styled-components"

export const ExtensionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 30vh;
  margin: 0 -20px;
  flex-grow: 1;
  border-top: 1px solid #2f2f2f;
  background-color: #1e1e1e;
`
export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  background: linear-gradient(#1e1e1e 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), #1e1e1e 70%) 0 100%,
    radial-gradient(
      50% 0,
      farthest-side,
      rgba(150, 150, 150, 0.3),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        50% 100%,
        farthest-side,
        rgba(150, 150, 150, 0.3),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background: linear-gradient(#1e1e1e 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), #1e1e1e 70%) 0 100%,
    radial-gradient(
      farthest-side at 50% 0,
      rgba(150, 150, 150, 0.3),
      rgba(0, 0, 0, 0)
    ),
    radial-gradient(
        farthest-side at 50% 100%,
        rgba(150, 150, 150, 0.3),
        rgba(0, 0, 0, 0)
      )
      0 100%;
  background-repeat: no-repeat;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
`

export const ButtonContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  padding: 6px 16px;
  margin: 8px 0;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  border-radius: 40px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#4e4e4e" : "#2f2f2f;"};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #3d3d3d;
  }
  > h6 {
    font-weight: 400;
    color: #dcdcdc;
  }
`
export const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #616161;
`
