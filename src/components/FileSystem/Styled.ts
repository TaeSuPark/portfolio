import styled from "styled-components"
import VStack from "../VStack/VStack"
import mainTheme from "@styles/mainTheme"

export const FileSysContainer = styled(VStack)`
  width: 20vw;
  min-width: 350px;
  padding: 12px 0px;
  background-color: ${mainTheme.colors.secondary};
  border-right: 1px solid ${mainTheme.colors.thirdary};
`

export const FileSystemBody = styled(VStack)`
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
`
