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
