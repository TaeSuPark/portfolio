import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"

import Typography from "../Typography/Typograpy"

import ScrollTab from "./ScrollTab"

import { useRecoilState } from "recoil"
import { activeFileState } from "@src/recoil/dataAtom"
import {
  Introduction,
  Project01,
  Project02,
  Project03,
  Project04,
  Project05,
} from "../Projects"
import { DetailContainer } from "./styled"

import IcRight from "/public/ic_right.svg"
import IcReactSmall from "/public/ic_react_small.svg"
import IcLabtop from "/public/ic_labtop.svg"
import IcComponent from "/public/ic_component.svg"
import PathInfo from "./PathInfo"

const Contents = () => {
  const [active, setActive] = useRecoilState(activeFileState)

  return (
    <VStack flexGrow={1} overflowX="hidden" height="100vh">
      <ScrollTab />

      <DetailContainer>
        {active && <PathInfo />}
        {active === "Project01" ? (
          <Project01 />
        ) : active === "Project02" ? (
          <Project02 />
        ) : active === "Project03" ? (
          <Project03 />
        ) : active === "Project04" ? (
          <Project04 />
        ) : active === "Project05" ? (
          <Project05 />
        ) : active === "Introduction" ? (
          <Introduction />
        ) : (
          <></>
        )}
      </DetailContainer>
    </VStack>
  )
}

export default Contents
