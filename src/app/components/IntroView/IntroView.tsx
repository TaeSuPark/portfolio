import { Typography } from "@mui/material"

import {
  TabContainer,
  Tab,
  EmptyTab,
  CardContainer,
  CardBottom,
  LinkContainer,
} from "./styled"

import VStack from "../VStack/VStack"
import HStack from "../HStack/HStack"

import IcOpenFolder from "/public/ic_open_folder.svg"
import IcGitBranch from "/public/ic_git_branch.svg"
import IcPhone from "/public/ic_phone.svg"
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

      <VStack justifyContent="center" alignItems="center" height="90vh">
        <HStack width="100%">
          <VStack width="50%" gap="48px" p="120px">
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
              {/* <LinkContainer>
                <IcPhone />
                <Typography
                  variant="h6"
                  color="#4277D0"
                  style={{ fontWeight: 400 }}
                >
                  Connact to...
                </Typography>
              </LinkContainer> */}
            </VStack>
          </VStack>
          <VStack width="50%" gap="20px" p="120px">
            <Typography variant="h5" color="#CECECE">
              History
            </Typography>
            <VStack>
              <CardContainer>
                <Typography variant="h6" color="#CECECE">
                  {`2023.10 ~`}
                </Typography>
                <Typography variant="subtitle1" color="#CECECE">
                  {`Study & Find Job`}
                </Typography>
              </CardContainer>
              <CardBottom processing />
            </VStack>
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
          </VStack>
        </HStack>
      </VStack>
    </VStack>
  )
}

export default IntroView
