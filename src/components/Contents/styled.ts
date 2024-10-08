import styled from "styled-components"
import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"

export const ScrollTabContainer = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: overlay;
  min-height: 51px;

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-track {
    background-color: #252525;
    // background-color: hsla(0, 0%, 42%, 0.49);
  }
  &::-webkit-scrollbar-thumb {
    // background-color: #777777;
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 10px;
    border: 4px solid #252525;
  }
`

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: overlay;

  padding: 0px 20px 20px 20px;
  &::-webkit-scrollbar {
    width: 20px;
  }

  &::-webkit-scrollbar-track {
    background-color: #252525;
  }

  &::-webkit-scrollbar-thumb {
    // background-color: #777777;
    background-color: hsla(0, 0%, 42%, 0.49);
    border-radius: 10px;
    border: 6px solid #252525;
  }
`
