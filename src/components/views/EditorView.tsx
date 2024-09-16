import HStack from "../HStack/HStack"
import EmptyTab from "../Tab/EmptyTab"
import Tab from "../Tab/Tab"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import mainTheme from "@src/styles/mainTheme"
import AnimateHeight from "react-animate-height"

import IcMenuFiles from "@assets/ic_menu_files.svg"
import IcMenuBlock from "@assets/ic_menu_block.svg"
import IcMenuMsg from "@assets/ic_menu_msg.svg"

import { FileSysContainer } from "./styled"
import ArrowTypo from "../ArrowTypo/ArrowTypo"
import FileSystemRemained from "../FileSystemRemained/FileSystemRemained"
import { useState } from "react"

const EditorView = () => {
  const [openFile, setOpenFile] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isInnerOpen, setIsInnerOpen] = useState<boolean>(false)

  const handleFileOpen = (fileName: string) => {
    if (openFile.includes(fileName)) {
      setOpenFile(openFile.filter((file) => file !== fileName))
    } else {
      setOpenFile([...openFile, fileName])
    }
  }

  return (
    <VStack bg={"primary"} height="100%" minHeight="100vh">
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
        <FileSysContainer>
          <VStack>
            <VStack gap={8}>
              <VStack pl={28} pb={8}>
                <Typography variant="body-r" color="white-light">
                  EXPLORER
                </Typography>
              </VStack>
              <ArrowTypo
                variant="body-m"
                isOpen={openFile.includes("total")}
                color="white-light"
                value="PROJECTS"
                onClick={() => handleFileOpen("total")}
                p="6px 4px"
              />
            </VStack>
            <AnimateHeight
              duration={150}
              height={openFile.includes("total") ? "auto" : 0}
            >
              <VStack>
                <ArrowTypo isOpen={false} value=".next" p="6px 0px 6px 20px" />
                <ArrowTypo
                  isOpen={false}
                  value=".vscode"
                  p="6px 0px 6px 20px"
                />
                <ArrowTypo isOpen={false} value=".yarn" p="6px 0px 6px 20px" />
                <ArrowTypo
                  isOpen={openFile.includes("src")}
                  value=".src"
                  color="green-main"
                  onClick={() => {
                    handleFileOpen("src")
                  }}
                  p="6px 0px 6px 20px"
                />
                <AnimateHeight
                  duration={150}
                  height={openFile.includes("src") ? "auto" : 0}
                >
                  <ArrowTypo
                    isOpen={openFile.includes("components")}
                    value="components"
                    color="green-main"
                    onClick={() => {
                      handleFileOpen("components")
                    }}
                    p="6px 0px 6px 32px"
                  />
                  <AnimateHeight
                    duration={150}
                    height={openFile.includes("components") ? "auto" : 0}
                  >
                    <ArrowTypo
                      isOpen={openFile.includes("Introduction")}
                      value="Introduction"
                      color="green-main"
                      onClick={() => {
                        handleFileOpen("Introduction")
                      }}
                      p="6px 0px 6px 48px"
                    />
                    <AnimateHeight
                      duration={150}
                      height={openFile.includes("Introduction") ? "auto" : 0}
                    >
                      Introduction
                    </AnimateHeight>
                    <ArrowTypo
                      isOpen={openFile.includes("Projects")}
                      value="Projects"
                      color="green-main"
                      onClick={() => {
                        handleFileOpen("Projects")
                      }}
                      p="6px 0px 6px 48px"
                    />
                    <AnimateHeight
                      duration={150}
                      height={openFile.includes("Projects") ? "auto" : 0}
                    >
                      Projects
                    </AnimateHeight>
                  </AnimateHeight>
                </AnimateHeight>
                <FileSystemRemained />
              </VStack>
            </AnimateHeight>
          </VStack>
        </FileSysContainer>
      </HStack>
    </VStack>
  )
}

export default EditorView
