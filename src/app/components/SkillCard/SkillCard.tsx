import HStack from "../HStack/HStack"

import { Typography } from "@mui/material"
import VStack from "../VStack/VStack"

import IcTime from "/public/ic_time.svg"
import IcVerify from "/public/ic_verify.svg"
import IcVerifing from "/public/ic_verifing.svg"
import { CardContainer, IconContainer } from "./styled"

interface SkillCardProps {
  skillName: string
  year: number
  description: string
  svg: any
}

const SkillCard = ({ skillName, year, description, svg }: SkillCardProps) => {
  return (
    <CardContainer>
      <IconContainer>{svg}</IconContainer>

      <VStack width="100%">
        <VStack>
          <HStack justifyContent="space-between">
            <Typography variant="h6" color="#DCDCDC">
              {skillName}
            </Typography>
            <HStack alignItems="center" justifyContent="center" gap="4px">
              <IcTime />
              <Typography variant="subtitle1" color="#DCDCDC">
                {`${year}year`}
              </Typography>
            </HStack>
          </HStack>

          <HStack alignItems="center" gap="4px">
            {description === "Verified" ? <IcVerify /> : <IcVerifing />}

            <Typography variant="subtitle1" color="#DCDCDC">
              {description}
            </Typography>
          </HStack>
        </VStack>
      </VStack>
    </CardContainer>
  )
}

export default SkillCard
