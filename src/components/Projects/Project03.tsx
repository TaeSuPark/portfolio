import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import { OverflowContainer } from "./styled"

import Img3_1 from "/public/serv/img_3_1.svg"
import Img3_2 from "/public/serv/img_3_2.svg"
import Img3_3 from "/public/serv/img_3_3.svg"
import Img3_4 from "/public/serv/img_3_4.svg"
import Img3_5 from "/public/serv/img_3_5.svg"

const Project03 = () => {
  return (
    <VStack p="20px 12px" gap={24}>
      <Card>
        <VStack gap={24}>
          <Typography variant="subtitle-m" color="white-light">
            IMAGES
          </Typography>
          <OverflowContainer>
            <VStack>
              <Img3_1 />
            </VStack>
            <VStack>
              <Img3_2 />
            </VStack>
            <VStack>
              <Img3_3 />
            </VStack>
            <VStack>
              <Img3_4 />
            </VStack>
            <VStack>
              <Img3_5 />
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
                {`FRONT-END : React, Next.js, TypeScript, React Query, Redux, Recoil, Monorepo, yarn berry, Styled Components`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                BACK-END : Spring Boot, Mybatis, Postgresql, MS-SQL
              </Typography>
              <Typography variant="body-r" color="white-light">
                DEPLOYMENT : Naver Cloud Platform, Nginx, CentOS, Docker,
                Jenkins
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
                {`- 개발 리드, 서비스 기획 참여`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- Figma를 통한 디자인 일부 협업`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 서비스 데이터베이스 설계 및 구성`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 주소 등록 및 검색 기능 개발, 메인 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 보증금 안전진단 로직 및 화면 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 전세 계산기, 시세, 실거래, 매물, 관리비, 등기 대장 열람 및 정보 확인 기능 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 계약서 안전진단 기능 및 화면 일부 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 계약서 OCR 데이터에 따른 안전진단 화면, 확정일자, 전입신고 기능 개발`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 계약서 등록 기능 및 화면 개발`}
              </Typography>
            </VStack>
          </VStack>
        </Card>
      </VStack>
    </VStack>
  )
}

export default Project03
