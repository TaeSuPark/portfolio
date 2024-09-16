import { Typography } from "@mui/material"
import HStack from "../../HStack/HStack"
import VStack from "../../VStack/VStack"
import { MobileAbout, AboutContainer, ContentsContainer } from "./styled"
import Card from "../../Card/Card"

const MobileCard = () => {
  return (
    <MobileAbout>
      <AboutContainer>
        <ContentsContainer>
          <Card>
            <HStack gap="24px" minWidth="55vw">
              <VStack justifyContent="space-between" width="100%" gap="24px">
                <VStack gap="12px">
                  <Typography variant="h6" color="#DCDCDC">
                    About Me
                  </Typography>
                  <VStack gap="12px">
                    <Typography variant="subtitle1" color="#DCDCDC">
                      박태수
                    </Typography>
                    <Typography variant="subtitle1" color="#DCDCDC">
                      Tel : 010-4109-9841
                    </Typography>
                    <Typography variant="subtitle1" color="#DCDCDC">
                      Email : ptss0129@gmail.com
                    </Typography>
                    <Typography variant="subtitle1" color="#DCDCDC">
                      동국대학교 컴퓨터공학전공
                    </Typography>
                    <Typography variant="subtitle1" color="#DCDCDC">
                      자격증 : 정보처리기사
                    </Typography>
                  </VStack>
                </VStack>
              </VStack>
            </HStack>
          </Card>
          <Card>
            <HStack gap="24px" minWidth="55vw">
              <VStack justifyContent="space-between" width="100%" gap="24px">
                <VStack gap="12px">
                  <Typography variant="h6" color="#DCDCDC">
                    SKILLS
                  </Typography>
                  <VStack gap="16px">
                    <VStack>
                      <Typography variant="subtitle1" color="#DCDCDC">
                        Front-End
                      </Typography>
                      <Typography variant="body2" color="#DCDCDC">
                        React, Next.js, Js/Ts, React query, Recoil, Redux,
                        Styled Components, MonoRepo, Yarn berry
                      </Typography>
                    </VStack>
                    <VStack>
                      <Typography variant="subtitle1" color="#DCDCDC">
                        Back-End
                      </Typography>
                      <Typography variant="body2" color="#DCDCDC">
                        Spring Boot, Spring Security, Mybatis, Gradle,
                        Postgresql, Mysql, Mssql, Redis
                      </Typography>
                    </VStack>
                    <VStack>
                      <Typography variant="subtitle1" color="#DCDCDC">
                        Etc
                      </Typography>
                      <Typography variant="body2" color="#DCDCDC">
                        AWS, Naver Cloud Flatform, CentOS, Nginx, Docker,
                        Jenkins, Git, GitLab, Jira, Figma
                      </Typography>
                    </VStack>
                  </VStack>
                </VStack>
              </VStack>
            </HStack>
          </Card>
        </ContentsContainer>
      </AboutContainer>
    </MobileAbout>
  )
}

export default MobileCard
