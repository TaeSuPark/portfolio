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
import { useState } from "react"
import SkillExtensions from "../SkillExtensions/SkillExtensions"
import Connect from "../Connect/Connect"

const EditorView = () => {
  const [menu, setMenu] = useState<number>(0)
  return (
    <VStack bg={"primary"} height="100vh">
      <HStack flexGrow={1}>
        {/** Menu Tab */}
        <VStack width="max-content">
          <Tab
            onClick={() => {
              setMenu(0)
            }}
            direction="vertical"
            selected={menu === 0}
          >
            <IcMenuFiles
              stroke={
                mainTheme.colors[menu === 0 ? "white-light" : "grey-hide"]
              }
            />
          </Tab>
          <Tab
            onClick={() => {
              setMenu(1)
            }}
            direction="vertical"
            selected={menu === 1}
          >
            <IcMenuBlock
              stroke={
                mainTheme.colors[menu === 1 ? "white-light" : "grey-hide"]
              }
            />
          </Tab>
          <Tab
            onClick={() => {
              setMenu(2)
            }}
            direction="vertical"
            selected={menu === 2}
          >
            <IcMenuMsg
              stroke={
                mainTheme.colors[menu === 2 ? "white-light" : "grey-hide"]
              }
            />
          </Tab>
          <EmptyTab direction="vertical" />
        </VStack>

        {/** File System */}
        {menu === 0 ? (
          <FileSystem />
        ) : menu === 1 ? (
          <SkillExtensions />
        ) : (
          <Connect />
        )}
        <Contents />
      </HStack>
    </VStack>
  )
}

export default EditorView
