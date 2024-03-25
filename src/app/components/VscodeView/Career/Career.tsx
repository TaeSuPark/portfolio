import Bigtech from "/public/img_bigtech.svg"
import VStack from "../../VStack/VStack"
import HStack from "../../HStack/HStack"
import { CareerContainer, VerticalLine } from "./styled"
import { Typography } from "@mui/material"

const Career = () => {
  return (
    <CareerContainer>
      <HStack gap="24px">
        <VStack>
          <Bigtech />
        </VStack>
        <VerticalLine />
        <VStack gap="12px">
          <Typography variant="h4" color="#242424">
            {`빅테크플러스 (주)`}
          </Typography>
          <Typography variant="subtitle1" color="#6D6D6D">
            {`2021.03 - 2023.09`}
          </Typography>
          <VStack>
            <Typography
              variant="subtitle1"
              color="#6D6D6D"
              style={{ wordBreak: "normal" }}
            >
              부동산 공적 장부 및 데이터 등을 통해 사용자에게 맞춤 정보를
              제공하는 프롭테크 스타트업입니다.
            </Typography>
            <Typography
              variant="subtitle1"
              color="#6D6D6D"
              style={{ wordBreak: "normal" }}
            >
              부동산자산관리서비스 홈큐와 등기, 대장 열람플랫폼 독큐를
              서비스하고 있습니다.
            </Typography>
          </VStack>
        </VStack>
      </HStack>
    </CareerContainer>
  )
}

export default Career
