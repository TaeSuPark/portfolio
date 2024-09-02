import { Typography } from "@mui/material"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import VStack from "../VStack/VStack"

import Img4_1 from "/public/serv/img_4_1.svg"
import Img4_2 from "/public/serv/img_4_2.svg"
import Img4_3 from "/public/serv/img_4_3.svg"
import Img4_4 from "/public/serv/img_4_4.svg"
import Img4_5 from "/public/serv/img_4_5.svg"
import { Container } from "./styled"

const Project4th = () => {
  return (
    <VStack p="20px 12px" gap="24px">
      <VStack gap="24px">
        <VStack gap="16px">
          <Typography variant="h6" color="#242424">
            WORKS
          </Typography>
          <VStack gap="24px">
            <Container>
              <VStack>
                <Img4_1 />
              </VStack>
              <VStack>
                <Typography variant="subtitle1" color="#242424">
                  {`하나은행`}
                </Typography>
                <Typography variant="body2" color="#242424">
                  {`2021.07 - 2021.09`}
                </Typography>
                <Typography variant="subtitle1" color="#242424">
                  {`추천부동산, 등기변동알림서비스 제휴`}
                </Typography>
              </VStack>
            </Container>
            <Container>
              <VStack>
                <Img4_2 />
              </VStack>
              <VStack>
                <Typography variant="subtitle1" color="#242424">
                  {`경남은행`}
                </Typography>
                <Typography variant="body2" color="#242424">
                  {`2022.03 - 2022.05`}
                </Typography>
                <Typography variant="subtitle1" color="#242424">
                  {`추천부동산, 등기변동알림서비스 제휴(+자산관리 추가 제휴)`}
                </Typography>
              </VStack>
            </Container>
            <Container>
              <VStack>
                <Img4_3 />
              </VStack>
              <VStack>
                <Typography variant="subtitle1" color="#242424">
                  {`부산은행`}
                </Typography>
                <Typography variant="body2" color="#242424">
                  {`2022.06 - 2022.08`}
                </Typography>
                <Typography variant="subtitle1" color="#242424">
                  {`추천부동산, 등기변동알림서비스 제휴`}
                </Typography>
              </VStack>
            </Container>
            <Container>
              <VStack>
                <Img4_4 />
              </VStack>
              <VStack>
                <Typography variant="subtitle1" color="#242424">
                  {`KBSTAR`}
                </Typography>
                <Typography variant="body2" color="#242424">
                  {`2023.03 - 2023.05`}
                </Typography>
                <Typography variant="subtitle1" color="#242424">
                  {`등기변동알림 서비스 제휴(+기업용 KBSTAR 추가 제휴)`}
                </Typography>
              </VStack>
            </Container>
            <Container>
              <VStack>
                <Img4_5 />
              </VStack>
              <VStack>
                <Typography variant="subtitle1" color="#242424">
                  {`KB부동산`}
                </Typography>
                <Typography variant="body2" color="#242424">
                  {`2023.06 - 2023.09`}
                </Typography>
                <Typography variant="subtitle1" color="#242424">
                  {`전세지키미(보증금안전진단) 서비스 제휴`}
                </Typography>
              </VStack>
            </Container>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  )
}
export default Project4th
