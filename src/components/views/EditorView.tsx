import HStack from "../HStack/HStack"
import EmptyTab from "../Tab/EmptyTab"
import Tab from "../Tab/Tab"
import VStack from "../VStack/VStack"
import mainTheme from "@src/styles/mainTheme"

import IcMenuFiles from "@assets/ic_menu_files.svg"
import IcMenuBlock from "@assets/ic_menu_block.svg"
import IcMenuMsg from "@assets/ic_menu_msg.svg"

import FileSystem from "../FileSystem/FileSystem"
import Contents from "../Contents/Contents"
import { useEffect, useState } from "react"
import SkillExtensions from "../SkillExtensions/SkillExtensions"
import Connect from "../Connect/Connect"

const EditorView = () => {
  const [menu, setMenu] = useState<number>(0)

  const handleMenuClick = (index: number) => {
    if (menu === index) {
      setMenu(-1)
      return
    }
    setMenu(index)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.innerWidth > 768 ? setMenu(0) : setMenu(-1)
    }
  }, [])

  return (
    <VStack bg={"primary"} height="100vh">
      <HStack flexGrow={1}>
        {/** Menu Tab */}
        <VStack width="max-content">
          <Tab
            onClick={() => {
              handleMenuClick(0)
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
              handleMenuClick(1)
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
          {/* <Tab
            onClick={() => {
              handleMenuClick(2)
            }}
            direction="vertical"
            selected={menu === 2}
          >
            <IcMenuMsg
              stroke={
                mainTheme.colors[menu === 2 ? "white-light" : "grey-hide"]
              }
            />
          </Tab> */}
          <EmptyTab direction="vertical" />
        </VStack>

        {/** File System */}
        {menu === 0 ? (
          <FileSystem />
        ) : menu === 1 ? (
          <SkillExtensions />
        ) : menu === 2 ? (
          <Connect />
        ) : (
          <></>
        )}
        <Contents />
      </HStack>
    </VStack>
  )
}

export default EditorView
