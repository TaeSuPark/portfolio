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

const Project05 = () => {
  return (
    <VStack p="20px 12px" gap={24}>
      <VStack gap={24}>
        <Card>
          <VStack gap={24}>
            <Typography variant="subtitle-m" color="white-light">
              WORKS
            </Typography>
            <VStack gap={8}>
              <Typography variant="body-r" color="white-light">
                {`- 신규입사자 프론트엔드 및 백엔드 기초교육`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 자사 사용 프레임워크 교육`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- 자사 서비스 데이터베이스 구조 교육`}
              </Typography>
              <Typography variant="body-r" color="white-light">
                {`- Git Flow, GitLab 교육`}
              </Typography>
            </VStack>
          </VStack>
        </Card>
      </VStack>
    </VStack>
  )
}

export default Project05
