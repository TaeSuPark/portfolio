import { useState } from "react"
import HStack from "../HStack/HStack"
import { skillData } from "@/app/utils/Datas"
import { SelectedContainer } from "../MacCard/styled"
import { Typography } from "@mui/material"
import VStack from "../VStack/VStack"

import IcDooray from "/public/skills/ic_dooray.svg"
import IcTime from "/public/ic_time.svg"
import IcVerify from "/public/ic_verify.svg"
import IcVerifing from "/public/ic_verifing.svg"

interface SkillCardProps {
  skillName: string
  year: number
  description: string
  svg: any
}

const SkillCard = ({ skillName, year, description, svg }: SkillCardProps) => {
  return (
    <HStack p="8px 16px" gap="16px" justifyContent="center" alignItems="center">
      <VStack
        justifyContent="center"
        alignItems="center"
        width="80px"
        height="80px"
      >
        {svg}
      </VStack>

      <VStack width="100%">
        <VStack>
          <HStack justifyContent="space-between">
            <Typography variant="h6" color="#DCDCDC">
              {skillName}
            </Typography>
            <HStack alignItems="center" justifyContent="center" gap="4px">
              <IcTime />
              <Typography variant="subtitle1" color="#DCDCDC">
                {year}year
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
    </HStack>
  )
}

export default SkillCard
