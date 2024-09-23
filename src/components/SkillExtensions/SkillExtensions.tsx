import Typography2 from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import AnimateHeight from "react-animate-height"
import { skillData } from "@utils/Datas"
import {
  ButtonContainer,
  CircleContainer,
  SkillContainer,
  SkillExtensionsContainer,
} from "./styled"
import { useState } from "react"

import SvgTypo from "../SvgTypo/SvgTypo"
import { useRecoilState } from "recoil"
import { activeFileState, tabState } from "@src/recoil/dataAtom"
import { Typography } from "@mui/material"
import HStack from "../HStack/HStack"

import IcDown from "/public/ic_down.svg"
import IcUp from "/public/ic_up.svg"
import SkillCard from "../SkillCard/SkillCard"
import ArrowTypo from "../ArrowTypo/ArrowTypo"

interface SkillExtensionsProps {}

const SkillExtensions = ({}: SkillExtensionsProps) => {
  const [selected, setSelected] = useState<{
    title: string
    data: { skillName: string; year: number; description: string; svg: any }[]
  }>(skillData[0])

  const [isOpen, setIsOpen] = useState<boolean>(true)
  return (
    <SkillExtensionsContainer>
      <VStack overflowY="auto">
        <VStack gap={8}>
          <VStack pl={28} pb={8} pt={12}>
            <Typography2 variant="body-r" color="white-light">
              SKILLS
            </Typography2>
          </VStack>
        </VStack>
        <VStack>
          <HStack gap={16} p="12px" overflowX="auto">
            {skillData
              .filter((v, idx) => idx < 3)
              .map((v, idx) => (
                <ButtonContainer
                  key={idx}
                  onClick={() => {
                    setSelected(v)
                    setIsOpen(true)
                  }}
                  $isSelected={v.title === selected.title}
                >
                  <Typography2 variant="body-m" color="white-light">
                    {v.title}
                  </Typography2>
                </ButtonContainer>
              ))}
          </HStack>
          <HStack gap={16} p="12px" overflowX="auto">
            {skillData
              .filter((v, idx) => idx >= 3)
              .map((v, idx) => (
                <ButtonContainer
                  key={idx}
                  onClick={() => {
                    setSelected(v)
                    setIsOpen(true)
                  }}
                  $isSelected={v.title === selected.title}
                >
                  <Typography2 variant="body-m" color="white-light">
                    {v.title}
                  </Typography2>
                </ButtonContainer>
              ))}
          </HStack>
        </VStack>

        <ArrowTypo
          variant="body-m"
          isOpen={isOpen}
          color="white-light"
          value="SKILL LIST"
          onClick={() => setIsOpen(!isOpen)}
          p="6px 4px"
        />

        <SkillContainer>
          <AnimateHeight duration={200} height={isOpen ? "auto" : 0}>
            {selected.data.map((v, idx) => (
              <SkillCard {...v} key={idx} />
            ))}
          </AnimateHeight>
        </SkillContainer>
      </VStack>
    </SkillExtensionsContainer>
  )
}

export default SkillExtensions
