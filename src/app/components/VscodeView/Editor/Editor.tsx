import { Typography } from "@mui/material"
import HStack from "../../HStack/HStack"
import VStack from "../../VStack/VStack"
import { EditorContainer, EmptyTab, Tab, TabContainer } from "./styled"
import { useState } from "react"
import IcRight from "/public/ic_right.svg"
import IcReactSmall from "/public/ic_react_small.svg"
import IcLabtop from "/public/ic_labtop.svg"
import IcComponent from "/public/ic_component.svg"
import TextArea from "../TextArea/TextArea"
import Career from "../Career/Career"
import Terminal from "../Terminal/Terminal"

const Editor = () => {
  const [selectedTab, setSelectedTab] = useState<{ page: number }>({ page: 0 })

  const handleTab = (page: number) => {
    setSelectedTab({ page: page })
  }

  return (
    <VStack>
      <TabContainer>
        <HStack>
          <Tab
            onClick={() => {
              handleTab(0)
            }}
            selected={0 === selectedTab.page}
          >
            <HStack gap="6px" alignItems="center">
              <IcReactSmall />
              <Typography
                variant="h6"
                color="#D2B98A"
                style={{ fontWeight: 400 }}
              >
                About.tsx
              </Typography>
              <Typography
                variant="h6"
                color="#B19768"
                style={{ fontWeight: 400 }}
              >
                M
              </Typography>
            </HStack>
          </Tab>
          <Tab
            onClick={() => {
              handleTab(1)
            }}
            selected={1 === selectedTab.page}
          >
            <HStack gap="6px" alignItems="center">
              <IcLabtop />
              <Typography
                variant="h6"
                color="#8DCE8D"
                style={{ fontWeight: 400 }}
              >
                Work.tsx
              </Typography>
              <Typography
                variant="h6"
                color="#6BAC6B"
                style={{ fontWeight: 400 }}
              >
                U
              </Typography>
            </HStack>
          </Tab>
          <EmptyTab />
        </HStack>
      </TabContainer>
      <EditorContainer>
        {selectedTab.page === 0 ? (
          <VStack p="12px 20px">
            <HStack gap="10px">
              <Typography variant="body1" color="#EBEBEB">
                src
              </Typography>
              <IcRight />
              <Typography variant="body1" color="#EBEBEB">
                app
              </Typography>
              <IcRight />
              <Typography variant="body1" color="#EBEBEB">
                components
              </Typography>
              <IcRight />
              <HStack gap="6px">
                <IcReactSmall />
                <Typography variant="body1" color="#EBEBEB">
                  About.tsx
                </Typography>
              </HStack>
              <IcRight />
              <HStack gap="6px">
                <IcComponent />
                <Typography variant="body1" color="#EBEBEB">
                  About
                </Typography>
              </HStack>
            </HStack>

            <TextArea />
{/* 
            <Terminal /> */}
          </VStack>
        ) : (
          <Career />
        )}
      </EditorContainer>
    </VStack>
  )
}

export default Editor
