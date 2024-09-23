import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"

import Img4_1 from "/public/serv/img_4_1.svg"
import Img4_2 from "/public/serv/img_4_2.svg"
import Img4_3 from "/public/serv/img_4_3.svg"
import Img4_4 from "/public/serv/img_4_4.svg"
import Img4_5 from "/public/serv/img_4_5.svg"

const Project04 = () => {
  return (
    <VStack p="20px 12px" gap={24}>
      <VStack gap={24}>
        <Card>
          <VStack gap={16}>
            <Typography variant="subtitle-m" color="white-light">
              WORKS
            </Typography>
            <VStack gap={32}>
              <HStack gap={16}>
                <VStack>
                  <Img4_1 />
                </VStack>
                <VStack gap={4}>
                  <Typography variant="subtitle-r" color="white-light">
                    {`하나은행`}
                  </Typography>
                  <Typography variant="body-r" color="white-light">
                    {`2021.07 - 2021.09`}
                  </Typography>
                  <Typography variant="subtitle-r" color="white-light">
                    {`추천부동산, 등기변동알림서비스 제휴`}
                  </Typography>
                </VStack>
              </HStack>
              <HStack gap={16}>
                <VStack>
                  <Img4_2 />
                </VStack>
                <VStack gap={4}>
                  <Typography variant="subtitle-r" color="white-light">
                    {`경남은행`}
                  </Typography>
                  <Typography variant="body-r" color="white-light">
                    {`2022.03 - 2022.05`}
                  </Typography>
                  <Typography variant="subtitle-r" color="white-light">
                    {`추천부동산, 등기변동알림서비스 제휴(+자산관리 추가 제휴)`}
                  </Typography>
                </VStack>
              </HStack>
              <HStack gap={16}>
                <VStack>
                  <Img4_3 />
                </VStack>
                <VStack gap={4}>
                  <Typography variant="subtitle-r" color="white-light">
                    {`부산은행`}
                  </Typography>
                  <Typography variant="body-r" color="white-light">
                    {`2022.06 - 2022.08`}
                  </Typography>
                  <Typography variant="subtitle-r" color="white-light">
                    {`추천부동산, 등기변동알림서비스 제휴`}
                  </Typography>
                </VStack>
              </HStack>
              <HStack gap={16}>
                <VStack>
                  <Img4_4 />
                </VStack>
                <VStack gap={4}>
                  <Typography variant="subtitle-r" color="white-light">
                    {`KBSTAR`}
                  </Typography>
                  <Typography variant="body-r" color="white-light">
                    {`2023.03 - 2023.05`}
                  </Typography>
                  <Typography variant="subtitle-r" color="white-light">
                    {`등기변동알림 서비스 제휴(+기업용 KBSTAR 추가 제휴)`}
                  </Typography>
                </VStack>
              </HStack>
              <HStack gap={16}>
                <VStack>
                  <Img4_5 />
                </VStack>
                <VStack gap={4}>
                  <Typography variant="subtitle-r" color="white-light">
                    {`KB부동산`}
                  </Typography>
                  <Typography variant="body-r" color="white-light">
                    {`2023.06 - 2023.09`}
                  </Typography>
                  <Typography variant="subtitle-r" color="white-light">
                    {`전세지키미(보증금안전진단) 서비스 제휴`}
                  </Typography>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </Card>
      </VStack>
    </VStack>
  )
}

export default Project04
