import { Typography } from "@mui/material"
import VStack from "../VStack/VStack"
import {
  ExtensionContainer,
  ButtonContainer,
  CircleContainer,
  SkillContainer,
} from "./styled"
import HStack from "../HStack/HStack"
import SkillCard from "../SkillCard/SkillCard"
import IcDown from "/public/ic_down.svg"
import { skillData } from "@/app/utils/Datas"
import { useState } from "react"
import Editor from "./Editor/Editor"

const VscodeView = () => {
  const [selected, setSelected] = useState<{
    title: string
    data: { skillName: string; year: number; description: string; svg: any }[]
  }>(skillData[0])
  return (
    <HStack height="100vh">
      <ExtensionContainer>
        <VStack gap="12px" p="6px" height="100%">
          <HStack gap="8px" alignItems="center" p="0 0 0 16px">
            <Typography
              variant="h6"
              color="#DCDCDC"
              style={{ fontWeight: 400 }}
            >
              SKILLS
            </Typography>
          </HStack>
          <HStack gap="20px" wrap>
            {skillData.map((v, idx) => (
              <ButtonContainer
                key={idx}
                onClick={() => {
                  setSelected(v)
                }}
              >
                <Typography
                  variant="subtitle1"
                  color="#DCDCDC"
                  style={{ fontWeight: 400 }}
                >
                  {v.title}
                </Typography>
              </ButtonContainer>
            ))}
          </HStack>

          <HStack
            alignItems="center"
            justifyContent="space-between"
            p="0 16px 0 0"
          >
            <HStack gap="8px" alignItems="center">
              <IcDown />
              <Typography variant="h6" color="#DCDCDC">
                INSTALLED
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
        </VStack>
      </ExtensionContainer>

      {/** ------------------------------------ */}
      <Editor />
    </HStack>
  )
}
export default VscodeView
