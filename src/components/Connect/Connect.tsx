import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import AnimateHeight from "react-animate-height"

import { ConnectContainer } from "./styled"
import ArrowTypo from "../ArrowTypo/ArrowTypo"
import { useState } from "react"

import IcReactSmall from "@assets/ic_react_small.svg"
import IcProject from "@assets/ic_project.svg"
import SvgTypo from "../SvgTypo/SvgTypo"
import { useRecoilState } from "recoil"
import { activeFileState, tabState } from "@src/recoil/dataAtom"

interface ConnectProps {}

const Connect = ({}: ConnectProps) => {
  return (
    <ConnectContainer>
      <VStack flexGrow={1} alignItems="center" justifyContent="center">
        <VStack gap={8}>
          <VStack>
            <Typography variant="subtitle-m" color="white-light">
              준비중입니다...
            </Typography>
          </VStack>
        </VStack>
      </VStack>
    </ConnectContainer>
  )
}

export default Connect
