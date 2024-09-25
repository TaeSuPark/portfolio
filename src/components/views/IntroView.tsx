import { LinkContainer, VHContainer, MediaVStack } from "./styled"

import VStack from "@components/VStack/VStack"
import HStack from "@components/HStack/HStack"

import IcOpenFolder from "@assets/ic_open_folder.svg"
import IcGitBranch from "@assets/ic_git_branch.svg"
import IcVscodeSmall from "@assets/ic_vscode_small.svg"
import { useRouter } from "next/router"
import Typography from "@components/Typography/Typograpy"
import Card from "@components/Card/Card"
import Tab from "@components/Tab/Tab"
import EmptyTab from "@components/Tab/EmptyTab"

const IntroView = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push("/editor")
  }

  const handleGitClick = () => {
    location.href = "https://github.com/TaeSuPark"
  }

  return (
    <VStack bg={"primary"} height="100%" minHeight="100vh">
      <HStack>
        <Tab onClick={() => {}} selected={true}>
          <HStack gap={4} alignItems="center">
            <IcVscodeSmall />
            <Typography variant="body-r" color="white-bold" italic>
              Welcome
            </Typography>
          </HStack>
        </Tab>
        <EmptyTab />
      </HStack>

      <VStack alignItems="center" justifyContent="center" flexGrow={1}>
        <VHContainer>
          <MediaVStack>
            <VStack gap={48}>
              <VStack gap={24}>
                <Typography variant="h2" color="white-light">
                  Park Taesu Portfolio
                </Typography>
                <Typography variant="h3" color="grey-hide">
                  full-stack developer
                </Typography>
              </VStack>
              <VStack gap={12}>
                <Typography variant="title-r" color="white-light">
                  Start
                </Typography>
                <LinkContainer
                  onClick={handleClick}
                  gap={8}
                  alignItems="center"
                >
                  <IcOpenFolder />
                  <Typography variant="subtitle-r" color="blue-main">
                    Go to Portfolio...
                  </Typography>
                </LinkContainer>
                <LinkContainer
                  onClick={handleGitClick}
                  gap={8}
                  alignItems="center"
                >
                  <IcGitBranch />
                  <Typography variant="subtitle-r" color="blue-main">
                    Go to Git Repository...
                  </Typography>
                </LinkContainer>
              </VStack>
            </VStack>
          </MediaVStack>
          <MediaVStack>
            <VStack gap={20} minWidth="30vw">
              <Typography variant="title-r" color="white-light">
                History
              </Typography>

              <Card>
                <VStack gap={12}>
                  <Typography variant="subtitle-m" color="white-light">
                    {`2021.03 ~ 2023.09`}
                  </Typography>
                  <VStack gap={4}>
                    <Typography variant="body-r" color="white-light">
                      {`빅테크플러스 근무`}
                    </Typography>
                    <Typography variant="body-r" color="white-light">
                      {`PlatformLab - 연구원(IT개발)`}
                    </Typography>
                  </VStack>
                </VStack>
              </Card>
              <Card>
                <VStack gap={12}>
                  <Typography variant="subtitle-m" color="white-light">
                    {`2014.03 ~ 2020.08`}
                  </Typography>
                  <VStack gap={4}>
                    <Typography variant="body-r" color="white-light">
                      {`동국대학교(서울) 졸업`}
                    </Typography>
                    <Typography variant="body-r" color="white-light">
                      {`컴퓨터공학전공`}
                    </Typography>
                  </VStack>
                </VStack>
              </Card>
            </VStack>
          </MediaVStack>
        </VHContainer>
      </VStack>
    </VStack>
  )
}

export default IntroView
