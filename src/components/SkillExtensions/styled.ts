import styled from "styled-components"
import VStack from "../VStack/VStack"
import mainTheme from "@styles/mainTheme"

export const SkillExtensionsContainer = styled(VStack)`
  width: 20vw;
  min-width: 350px;
  height: 100vh;
  background-color: ${mainTheme.colors.secondary};
  border-right: 1px solid ${mainTheme.colors.thirdary};
`
export const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #1a1a1a;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: #777777;
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 10px;
    border: 6px solid #1a1a1a;
  }

  background: linear-gradient(#1a1a1a 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), #1a1a1a 70%) 0 100%,
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
  background: linear-gradient(#1a1a1a 30%, rgba(255, 255, 255, 0)),
    linear-gradient(rgba(255, 255, 255, 0), #1a1a1a 70%) 0 100%,
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
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  width: max-content;
  height: max-content;
  border-radius: 20px;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#4e4e4e" : "#2f2f2f;"};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background-color: #3d3d3d;
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
