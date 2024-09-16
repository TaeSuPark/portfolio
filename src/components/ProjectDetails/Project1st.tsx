import { Typography } from "@mui/material"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import VStack from "../VStack/VStack"
import Img1_1 from "/public/serv/img_1_1.svg"
import Img1_2 from "/public/serv/img_1_2.svg"
import Img1_3 from "/public/serv/img_1_3.svg"
import { Container } from "./styled"

const Project1st = () => {
  return (
    <VStack p="20px 12px" gap="24px">
      <Container hasBetween>
        <VStack isShadow>
          <Img1_1 />
        </VStack>
        <VStack isShadow>
          <Img1_2 />
        </VStack>
        <VStack isShadow>
          <Img1_3 />
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
              {`FRONT-END : React, TypeScript, React Query, Redux, Styled Components`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              BACK-END : Spring Boot, Mybatis, Postgresql, MS-SQL
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              DEPLOYMENT : AWS, Naver Cloud Platform, Nginx, CentOS
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
              {`- Figma를 통한 디자인 일부 업무`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 서비스 데이터베이스 설계 및 구성`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 등기 대장 열람 문서 제공 및 요약 정보 제공 기능 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 전세 간편 안전진단, 시세 계산기 기능 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 가격변동, 상가변동, 시세, 실거래 변동 알림 스케줄러 및 로직 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 변동 내역 카드 기능 개발, 상세 정보 제공 기능 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 변동 내역 푸시알림 정책 및 기능 개발`}
            </Typography>
            <Typography variant="subtitle1" color="#242424">
              {`- 이 외 서비스 관련 백엔드, 프론트엔드 일괄 개발`}
            </Typography>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}
export default Project1st
