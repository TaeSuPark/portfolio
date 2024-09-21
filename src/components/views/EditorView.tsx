import HStack from "../HStack/HStack"
import EmptyTab from "../Tab/EmptyTab"
import Tab from "../Tab/Tab"
import VStack from "../VStack/VStack"
import mainTheme from "@src/styles/mainTheme"

import IcMenuFiles from "@assets/ic_menu_files.svg"
import IcMenuBlock from "@assets/ic_menu_block.svg"
import IcMenuMsg from "@assets/ic_menu_msg.svg"

import IcProject from "@assets/ic_project.svg"

import FileSystem from "../FileSystem/FileSystem"
import Typography from "../Typography/Typograpy"
import Contents from "../Contents/Contents"

const EditorView = () => {
  return (
    <VStack bg={"primary"} height="100vh">
      <HStack flexGrow={1}>
        {/** Menu Tab */}
        <VStack width="max-content">
          <Tab onClick={() => {}} direction="vertical" selected={true}>
            <IcMenuFiles stroke={mainTheme.colors["white-light"]} />
          </Tab>
          <Tab onClick={() => {}} direction="vertical" selected={!true}>
            <IcMenuBlock stroke={mainTheme.colors["grey-hide"]} />
          </Tab>
          <Tab onClick={() => {}} direction="vertical" selected={!true}>
            <IcMenuMsg stroke={mainTheme.colors["grey-hide"]} />
          </Tab>
          <EmptyTab direction="vertical" />
        </VStack>

        {/** File System */}
        <FileSystem />
        <Contents />
      </HStack>
    </VStack>
  )
}

export default EditorView
