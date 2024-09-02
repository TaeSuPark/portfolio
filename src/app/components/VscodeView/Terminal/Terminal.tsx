import { Typography } from "@mui/material"

import IcDown from "/public/ic_down.svg"
import { skillData } from "@/app/utils/Datas"
import {
  ButtonContainer,
  CircleContainer,
  ExtensionContainer,
  SkillContainer,
} from "./styled"
import VStack from "../../VStack/VStack"
import HStack from "../../HStack/HStack"
import { useState } from "react"
import SkillCard from "../../SkillCard/SkillCard"

const Terminal = () => {

  return (
    <ExtensionContainer>
      <VStack gap="12px" >
        <Typography
          p="12px 0 0 16px"
          variant="h6"
          color="#DCDCDC"
          style={{ fontWeight: 400 }}
        >
          TERMINAL
        </Typography>
      </VStack>
    </ExtensionContainer>
  )
}

export default Terminal
