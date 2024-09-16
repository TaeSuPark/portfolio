import { Typography } from "@mui/material"

import IcDown from "/public/ic_down.svg"
import IcUp from "/public/ic_up.svg"
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

const Skills = () => {
  const [selected, setSelected] = useState<{
    title: string
    data: { skillName: string; year: number; description: string; svg: any }[]
  }>(skillData[0])

  const [isDown, setIsDown] = useState<boolean>(true)
  return (
    <ExtensionContainer>
      <VStack gap="12px" height="100%">
        <Typography
          p="12px 0 0 16px"
          variant="h6"
          color="#DCDCDC"
          style={{ fontWeight: 400 }}
        >
          SKILLS
        </Typography>

        <HStack gap="20px" p="0 0 0 12px" wrap>
          {skillData.map((v, idx) => (
            <ButtonContainer
              key={idx}
              onClick={() => {
                setSelected(v)
                setIsDown(true)
              }}
              $isSelected={v.title === selected.title}
            >
              <Typography variant="subtitle1">{v.title}</Typography>
            </ButtonContainer>
          ))}
        </HStack>
        {isDown ? (
          <>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              p="0 16px 0 12px"
            >
              <HStack
                gap="8px"
                alignItems="center"
                onClick={() => {
                  setIsDown(!isDown)
                }}
              >
                <IcDown />
                <Typography variant="h6" color="#DCDCDC">
                  SKILL LIST
                </Typography>
              </HStack>
              <CircleContainer>
                <Typography variant="body1" color="#DCDCDC">
                  {selected.data.length}
                </Typography>
              </CircleContainer>
            </HStack>
            <SkillContainer>
              {selected.data.map((v, idx) => (
                <SkillCard {...v} key={idx} />
              ))}
            </SkillContainer>
          </>
        ) : (
          <>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              p="0 16px 0 12px"
            >
              <HStack
                gap="8px"
                alignItems="center"
                onClick={() => {
                  setIsDown(!isDown)
                }}
              >
                <IcUp />
                <Typography variant="h6" color="#DCDCDC">
                  SKILL LIST
                </Typography>
              </HStack>
              <CircleContainer>
                <Typography variant="body1" color="#DCDCDC">
                  {selected.data.length}
                </Typography>
              </CircleContainer>
            </HStack>
          </>
        )}
      </VStack>
    </ExtensionContainer>
  )
}

export default Skills
