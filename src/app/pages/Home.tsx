import { MutableRefObject, useRef } from "react"
import { Typography } from "@mui/material"
import VStack from "../components/VStack/VStack"
import HStack from "../components/HStack/HStack"
import MacCard from "../components/MacCard/MacCard"
import Backview from "/public/mac_img.png"
import Image from "next/image"
import Box from "../components/Box/Box"
import { BtnContainer, HoverContainer } from "./styled"
import VscodeView from "../components/VscodeView/VscodeView"
import IcVscode from "/public/ic_vscode.svg"

const Home = () => {
  const ref = useRef<HTMLDivElement>(null)

  const handleScroll = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <VStack minWidth="80vw">
      <Image
        src={Backview}
        alt="backview"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          minWidth: "100%",
          zIndex: -1,
          // filter: "blur(2px)",
        }}
      />
      <VStack justifyContent="center" alignItems="center" height="100vh">
        <HStack justifyContent="center" alignItems="center">
          <Typography variant="h3" color="#7C7C7C">
            {`<`}
          </Typography>
          <Typography variant="h3" color="#A2E9D2">
            {`Developer`}
          </Typography>
          <Typography variant="h3" color="#7C7C7C">
            {`>`}
          </Typography>
          <Typography variant="h4" color="#e9e9e9" whiteSpace={"nowrap"}>
            박태수의 포트폴리오 입니다.
          </Typography>
          <Typography variant="h3" color="#7C7C7C">
            {`</`}
          </Typography>
          <Typography variant="h3" color="#A2E9D2">
            {`Developer`}
          </Typography>
          <Typography variant="h3" color="#7C7C7C">
            {`>`}
          </Typography>
        </HStack>
        <BtnContainer onClick={handleScroll}>
          <IcVscode />
          <Typography variant="h6" color="#e9e9e9" style={{ fontWeight: 400 }}>
            실행하기
          </Typography>
        </BtnContainer>
      </VStack>

      <VStack bg="green" minWidth="50vw" ref={ref}>
        <VscodeView />
      </VStack>
    </VStack>
  )
}

export default Home
