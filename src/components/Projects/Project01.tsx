import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import { OverflowContainer } from "./styled"
import Img1_1 from "/public/serv/img_1_1.svg"
import Img1_2 from "/public/serv/img_1_2.svg"
import Img1_3 from "/public/serv/img_1_3.svg"

const Project01 = () => {
  return (
    <VStack p="20px 12px" gap={24}>
      <Card>
        <VStack gap={24}>
          <Typography variant="subtitle-m" color="white-light">
            IMAGES
          </Typography>
          <OverflowContainer>
            <VStack>
              <Img1_1 />
            </VStack>
            <VStack>
              <Img1_2 />
            </VStack>
            <VStack>
              <Img1_3 />
            </VStack>
          </OverflowContainer>
        </VStack>
      </Card>
      <VStack gap={24}>
        <Card>
          <VStack gap={24}>
            <Typography variant="subtitle-m" color="white-light">
              SKILLS
            </Typography>
            <VStack gap={8}>
              <Typography variant="body-r" color="white-light">
                {`FRONT-END : React, TypeScript, React Query, Redux, Styled Components`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                BACK-END : Spring Boot, Mybatis, Postgresql, MS-SQL
              </Typography>
              <Typography variant="body-r" color="white-light">
                DEPLOYMENT : AWS, Naver Cloud Platform, Nginx, CentOS
              </Typography>
              <Typography variant="body-r" color="white-light">
                COMMUNICATION : Git, GitLab , Figma, Postman
              </Typography>
            </VStack>
          </VStack>
        </Card>
        <Card>
          <VStack gap={24}>
            <Typography variant="subtitle-m" color="white-light">
              WORKS
            </Typography>
            <VStack gap={8}>
              <Typography variant="body-r" color="white-light">
                {`- Figma를 통한 디자인 일부 업무`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 서비스 데이터베이스 설계 및 구성`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 등기 대장 열람 문서 제공 및 요약 정보 제공 기능 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 전세 간편 안전진단, 시세 계산기 기능 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 가격변동, 상가변동, 시세, 실거래 변동 알림 스케줄러 및 로직 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 변동 내역 카드 기능 개발, 상세 정보 제공 기능 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 변동 내역 푸시알림 정책 및 기능 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 이 외 서비스 관련 백엔드, 프론트엔드 일괄 개발`}
              </Typography>
            </VStack>
          </VStack>
        </Card>
      </VStack>
    </VStack>
  )
}

export default Project01
