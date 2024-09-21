import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import AnimateHeight from "react-animate-height"

import { FileSysContainer } from "./Styled"
import ArrowTypo from "../ArrowTypo/ArrowTypo"
import { useState } from "react"
import FileSystemRemained from "./FileSystemRemained"

import IcReactSmall from "@assets/ic_react_small.svg"
import IcProject from "@assets/ic_project.svg"
import SvgTypo from "../SvgTypo/SvgTypo"
import { useRecoilState } from "recoil"
import { activeFileState, tabState } from "@src/recoil/dataAtom"

interface FileSystemProps {}

const FileSystem = ({}: FileSystemProps) => {
  const [tab, setTab] =
    useRecoilState<{ label: string; value: string; svg: any }[]>(tabState)
  const [active, setActive] = useRecoilState<string | undefined>(
    activeFileState
  )

  const [openFile, setOpenFile] = useState<string[]>([
    "total",
    "src",
    "components",
  ])

  const handleTab = (fileName: string, key: string) => {
    // if (tab.find((file) => file.value === key)) {
    //   setTab(tab.filter((file) => file.value !== key))
    // } else {
    //   setTab([...tab, { label: fileName, value: key }])
    // }
    if (!tab.find((file) => file.value === key)) {
      if (fileName.includes(".ts") || fileName.includes(".tsx")) {
        setTab([...tab, { label: fileName, value: key, svg: <IcReactSmall /> }])
      } else if (fileName.includes(".pjt") || fileName.includes(".wrk")) {
        setTab([...tab, { label: fileName, value: key, svg: <IcProject /> }])
      }
    }

    setActive(key)
  }

  const handleFileOpen = (fileName: string) => {
    if (openFile.includes(fileName)) {
      setOpenFile(openFile.filter((file) => file !== fileName))
    } else {
      setOpenFile([...openFile, fileName])
    }
  }

  return (
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
            <ArrowTypo isOpen={false} value=".vscode" p="6px 0px 6px 20px" />
            <ArrowTypo isOpen={false} value=".yarn" p="6px 0px 6px 20px" />
            <ArrowTypo
              isOpen={openFile.includes("src")}
              value="src"
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
                  <SvgTypo
                    svg={<IcReactSmall />}
                    value="Introduction.tsx"
                    color="green-main"
                    p="6px 0px 6px 64px"
                    onClick={() => {
                      handleTab("Introduction.tsx", "Introduction")
                    }}
                  />
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
                  <SvgTypo
                    svg={<IcProject />}
                    value="부동산_공적장부_플랫폼_독큐_개발.pjt"
                    color="green-main"
                    p="6px 0px 6px 64px"
                    onClick={() => {
                      handleTab(
                        "부동산_공적장부_플랫폼_독큐_개발.pjt",
                        "Project01"
                      )
                    }}
                  />
                  <SvgTypo
                    svg={<IcProject />}
                    value="홈큐_자산관리_서비스_개발.pjt"
                    color="green-main"
                    p="6px 0px 6px 64px"
                    onClick={() => {
                      handleTab("홈큐_자산관리_서비스_개발.pjt", "Project02")
                    }}
                  />
                  <SvgTypo
                    svg={<IcProject />}
                    value="홈큐_전세지키미_서비스_개발.pjt"
                    color="green-main"
                    p="6px 0px 6px 64px"
                    onClick={() => {
                      handleTab("홈큐_전세지키미_서비스_개발.pjt", "Project03")
                    }}
                  />
                  <SvgTypo
                    svg={<IcProject />}
                    value="은행사_서비스_제휴_업무.pjt"
                    color="green-main"
                    p="6px 0px 6px 64px"
                    onClick={() => {
                      handleTab("은행사_서비스_제휴_업무.pjt", "Project04")
                    }}
                  />
                  <SvgTypo
                    svg={<IcProject />}
                    value="기타_업무.wrk"
                    color="green-main"
                    p="6px 0px 6px 64px"
                    onClick={() => {
                      handleTab("기타_업무.wrk", "Project05")
                    }}
                  />
                </AnimateHeight>
              </AnimateHeight>
            </AnimateHeight>
            <FileSystemRemained />
          </VStack>
        </AnimateHeight>
      </VStack>
    </FileSysContainer>
  )
}

export default FileSystem
