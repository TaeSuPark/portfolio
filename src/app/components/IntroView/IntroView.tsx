import { Typography } from "@mui/material"

import {
  TabContainer,
  Tab,
  EmptyTab,
  CardContainer,
  CardBottom,
  LinkContainer,
  VHContainer,
  MediaVStack,
} from "./styled"

import VStack from "../VStack/VStack"
import HStack from "../HStack/HStack"

import IcOpenFolder from "/public/ic_open_folder.svg"
import IcGitBranch from "/public/ic_git_branch.svg"
import { useRouter } from "next/router"

const IntroView = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/editor")
  }
  const handleGitClick = () => {
    location.href = "https://github.com/TaeSuPark"
  }

  return (
    <VStack bg="#242424" height="100vh">
      <TabContainer>
        <HStack>
          <Tab onClick={() => {}} selected={true}>
            <HStack gap="6px" alignItems="center">
              <Typography
                variant="h6"
                color="#D3D3D3"
                style={{ fontWeight: 400, fontStyle: "italic" }}
              >
                Welcome
              </Typography>
            </HStack>
          </Tab>
          <EmptyTab />
        </HStack>
      </TabContainer>

      <VStack height="90vh" p="36px">
        <VHContainer>
          <MediaVStack gap="48px">
            <VStack gap="24px">
              <Typography variant="h3" color="#CECECE">
                Park Taesu Portfolio
              </Typography>
              <Typography variant="h4" color="#9C9C9C">
                full-stack developer
              </Typography>
            </VStack>
            <VStack gap="12px">
              <Typography variant="h5" color="#CECECE">
                Start
              </Typography>
              <LinkContainer onClick={handleClick}>
                <IcOpenFolder />
                <Typography
                  variant="h6"
                  color="#4277D0"
                  style={{ fontWeight: 400 }}
                >
                  Go to Portfolio...
                </Typography>
              </LinkContainer>
              <LinkContainer onClick={handleGitClick}>
                <IcGitBranch />
                <Typography
                  variant="h6"
                  color="#4277D0"
                  style={{ fontWeight: 400 }}
                >
                  Go to Git Repository...
                </Typography>
              </LinkContainer>
            </VStack>
          </MediaVStack>
          <MediaVStack gap="20px">
            <Typography variant="h5" color="#CECECE">
              History
            </Typography>
            <VStack>
              <CardContainer>
                <Typography variant="h6" color="#CECECE">
                  {`2021.03 ~ 2023.09`}
                </Typography>
                <Typography variant="subtitle1" color="#CECECE">
                  {`빅테크플러스 근무`}
                </Typography>
                <Typography variant="body2" color="#CECECE">
                  {`PlatformLab - 연구원(IT개발)`}
                </Typography>
              </CardContainer>
              <CardBottom processing={false} />
            </VStack>
            <VStack>
              <CardContainer>
                <Typography variant="h6" color="#CECECE">
                  {`2014.03 ~ 2020.08`}
                </Typography>
                <Typography variant="subtitle1" color="#CECECE">
                  {`동국대학교 학사`}
                </Typography>
                <Typography variant="body2" color="#CECECE">
                  {`컴퓨터공학전공`}
                </Typography>
              </CardContainer>
              <CardBottom processing={false} />
            </VStack>
          </MediaVStack>
        </VHContainer>
      </VStack>
    </VStack>
  )
}

export default IntroView
