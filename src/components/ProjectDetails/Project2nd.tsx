import { Typography } from "@mui/material"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import VStack from "../VStack/VStack"

import Img2_1 from "/public/serv/img_2_1.svg"
import Img2_2 from "/public/serv/img_2_2.svg"
import Img2_3 from "/public/serv/img_2_3.svg"
import Img2_4 from "/public/serv/img_2_4.svg"
import { Container } from "./styled"

const Project2nd = () => {
  return (
    <VStack p="20px 12px" gap="24px">
      <Container hasBetween>
        <VStack isShadow>
          <Img2_1 />
        </VStack>
        <VStack isShadow>
          <Img2_2 />
        </VStack>
        <VStack isShadow>
          <Img2_3 />
        </VStack>
        <VStack isShadow>
          <Img2_4 />
        </VStack>
      </Container>
      <Line />
      <VStack gap="24px">
        <VStack gap="16px">
          <Typography variant="h6" color="#242424">
            SKILL
          </Typography>
          <VStack gap="8px">
            <Typography variant="subtitle1" color="#242424">
              {`FRONT-END : React, Next.js, TypeScript, React Query, Redux, Recoil, Monorepo, yarn berry, Styled Components`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              BACK-END : Spring Boot, Mybatis, Postgresql, MS-SQL
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              DEPLOYMENT : Naver Cloud Platform, Nginx, CentOS, Docker, Jenkins
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              COMMUNICATION : Git, GitLab , Figma, Postman
            </Typography>
          </VStack>
        </VStack>
        <VStack gap="16px">
          <Typography variant="h6" color="#242424">
            WORKS
          </Typography>
          <VStack>
            <Typography variant="subtitle1" color="#242424">
              {`- 서비스 기획 참여`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 서비스 데이터베이스(Postgresql) 일괄 설계 및 구성`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- React 기반 프론트엔드 프레임워크 구축`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 전달받은 디자인 기반 공통 컴포넌트 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 회원 관련 로직, 화면 일괄 개발(가입, 그룹, 탈퇴 등)`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 포인트 정책, PG 결제 연동 및 쿠폰 시스템, 결제 관련 화면 일괄 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 공적장부(등기, 대장) 열람이력, 포인트 이용 내역 화면 일괄 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 관리자 기능 및 그룹 관리 기능, 화면 일괄 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 클라우드 바우처 대응 화면 및 기능 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- Naver Cloud Platform을 통한 서비스 배포`}
            </Typography>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}
export default Project2nd
