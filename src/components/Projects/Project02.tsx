import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import VStack from "../VStack/VStack"

import Img2_1 from "/public/serv/img_2_1.svg"
import Img2_2 from "/public/serv/img_2_2.svg"
import Img2_3 from "/public/serv/img_2_3.svg"
import Img2_4 from "/public/serv/img_2_4.svg"

import Typography from "../Typography/Typograpy"

const Project02 = () => {
  return (
    <VStack p="20px 12px" gap={24}>
      <HStack gap={12}>
        <VStack>
          <Img2_1 />
        </VStack>
        <VStack>
          <Img2_2 />
        </VStack>
        <VStack>
          <Img2_3 />
        </VStack>
        <VStack>
          <Img2_4 />
        </VStack>
      </HStack>
      <Line />
      <VStack gap={24}>
        <VStack gap={16}>
          <Typography variant="subtitle-m" color="white-light">
            SKILL
          </Typography>
          <VStack gap={8}>
            <Typography variant="body-r" color="white-light">
              {`FRONT-END : React, Next.js, TypeScript, React Query, Redux, Recoil, Monorepo, yarn berry, Styled Components`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              BACK-END : Spring Boot, Mybatis, Postgresql, MS-SQL
            </Typography>
            <Typography variant="body-r" color="white-light">
              DEPLOYMENT : Naver Cloud Platform, Nginx, CentOS, Docker, Jenkins
            </Typography>
            <Typography variant="body-r" color="white-light">
              COMMUNICATION : Git, GitLab , Figma, Postman
            </Typography>
          </VStack>
        </VStack>
        <VStack gap={16}>
          <Typography variant="subtitle-m" color="white-light">
            WORKS
          </Typography>
          <VStack>
            <Typography variant="body-r" color="white-light">
              {`- 서비스 기획 참여`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- 서비스 데이터베이스(Postgresql) 일괄 설계 및 구성`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- React 기반 프론트엔드 프레임워크 구축`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- 전달받은 디자인 기반 공통 컴포넌트 개발`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- 회원 관련 로직, 화면 일괄 개발(가입, 그룹, 탈퇴 등)`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- 포인트 정책, PG 결제 연동 및 쿠폰 시스템, 결제 관련 화면 일괄 개발`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- 공적장부(등기, 대장) 열람이력, 포인트 이용 내역 화면 일괄 개발`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- 관리자 기능 및 그룹 관리 기능, 화면 일괄 개발`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- 클라우드 바우처 대응 화면 및 기능 개발`}
            </Typography>
            <Typography variant="body-r" color="white-light">
              {`- Naver Cloud Platform을 통한 서비스 배포`}
            </Typography>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}

export default Project02
