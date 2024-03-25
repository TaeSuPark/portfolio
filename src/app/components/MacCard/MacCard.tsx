import { Typography } from "@mui/material"
import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"
import {
  MenuContainer,
  SelectedContainer,
  TopContainer,
  ViewContainer,
} from "./styled"

import BtnGreenSvg from "/public/green_button.svg"
import BtnYellowSvg from "/public/yellow_button.svg"
import BtnRedSvg from "/public/red_button.svg"
import ArrowRight from "/public/arrow_right.svg"
import ArrowLeft from "/public/arrow_left.svg"
import { useState } from "react"
import { skillData } from "@/app/utils/Datas"

interface MacCardProps {}

const MacCard: React.FC<MacCardProps> = () => {
  const [selected, setSelected] = useState<{
    title: string
    data: { skillName: string; svg: any }[]
  }>(skillData[0])

  return (
    <HStack height="500px">
      <MenuContainer>
        <VStack gap="24px" p="12px 8px 12px 8px">
          <HStack gap="8px" p="0px 5px">
            <BtnRedSvg />
            <BtnYellowSvg />
            <BtnGreenSvg />
          </HStack>
          <VStack>
            <VStack p="0px 5px">
              <Typography variant="subtitle2" color="#AAA6A2">
                Skill
              </Typography>
            </VStack>
            {skillData.map((v, idx) => (
              <SelectedContainer
                onClick={() => {
                  setSelected(v)
                }}
                key={idx}
                selected={v.title === selected.title}
              >
                <Typography variant="body2" color="#575755">
                  {v.title}
                </Typography>
              </SelectedContainer>
            ))}
          </VStack>
        </VStack>
      </MenuContainer>
      <VStack flexGrow={1}>
        <TopContainer>
          <HStack gap="24px" alignItems="center">
            <HStack gap="24px" p="12px">
              <ArrowLeft />
              <ArrowRight />
            </HStack>
            <Typography variant="body1" color="#575755">
              {selected.title}
            </Typography>
          </HStack>
        </TopContainer>
        <ViewContainer>
          <HStack gap="8vw" p="20px" wrap>
            {selected.data.map((v, idx) => (
              <VStack key={idx} height="120px" gap="10px">
                <VStack
                  justifyContent="center"
                  alignItems="center"
                  width="80px"
                  height="80px"
                >
                  {v.svg}
                </VStack>
                <Typography
                  variant="body2"
                  color="#575755"
                  style={{ whiteSpace: "pre", textAlign: "center" }}
                >
                  {v.skillName}
                </Typography>
              </VStack>
            ))}
          </HStack>
        </ViewContainer>
      </VStack>
    </HStack>
  )
}
export default MacCard
