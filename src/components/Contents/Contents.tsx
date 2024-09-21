import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"

import Typography from "../Typography/Typograpy"

import ScrollTab from "./ScrollTab"

import { useRecoilState } from "recoil"
import { activeFileState } from "@src/recoil/dataAtom"
import {
  Project01,
  Project02,
  Project03,
  Project04,
  Project05,
} from "../Projects"

const Contents = () => {
  const [active, setActive] = useRecoilState(activeFileState)

  return (
    <VStack flexGrow={1} overflowX="hidden" height="100vh">
      <ScrollTab />
      <VStack p="20px" bg="blue-light" overflowY="auto">
        {active === "Project01" ? (
          <>
            <Project01 />
            <Project01 />
            <Project01 />
          </>
        ) : active === "Project02" ? (
          <Project02 />
        ) : active === "Project03" ? (
          <Project03 />
        ) : active === "Project04" ? (
          <Project04 />
        ) : active === "Project05" ? (
          <Project05 />
        ) : (
          <></>
        )}
      </VStack>
    </VStack>
  )
}

export default Contents
