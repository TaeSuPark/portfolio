import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"
import Typography from "../Typography/Typograpy"

import { useRecoilState } from "recoil"
import { activeFileState } from "@src/recoil/dataAtom"

import IcRight from "/public/ic_right.svg"
import IcReactSmall from "/public/ic_react_small.svg"
import IcComponent from "/public/ic_component.svg"
import IcProject from "@assets/ic_project.svg"
import { useEffect, useState } from "react"

const PathInfo = () => {
  const [active, setActive] = useRecoilState(activeFileState)

  const [hasPath, setHasPath] = useState<boolean>(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.innerWidth > 768 ? setHasPath(true) : setHasPath(false)
    }
  }, [])

  return (
    <VStack p="6px 20px 4px 20px" flexGrow={1}>
      <HStack gap={8}>
        {hasPath && (
          <>
            <Typography variant="body-r" color="white-light">
              src
            </Typography>
            <IcRight />
            <Typography variant="body-r" color="white-light">
              components
            </Typography>
            <IcRight />
          </>
        )}

        {active === "Introduction" ? (
          <>
            {hasPath && (
              <>
                <Typography variant="body-r" color="white-light">
                  Introduction
                </Typography>
                <IcRight />
                <HStack gap={8}>
                  <IcReactSmall />
                  <Typography variant="body-r" color="white-light">
                    Introduction.tsx
                  </Typography>
                </HStack>
                <IcRight />
              </>
            )}

            <HStack gap={8}>
              <IcComponent />
              <Typography variant="body-r" color="white-light">
                Introduction
              </Typography>
            </HStack>
          </>
        ) : active === "Project01" ? (
          <>
            {hasPath && (
              <>
                <Typography variant="body-r" color="white-light">
                  Projects
                </Typography>
                <IcRight />
              </>
            )}
            <HStack gap={8}>
              <IcProject />
              <Typography variant="body-r" color="white-light" noWrap>
                부동산_공적장부_플랫폼_독큐_개발
              </Typography>
            </HStack>
          </>
        ) : active === "Project02" ? (
          <>
            {hasPath && (
              <>
                <Typography variant="body-r" color="white-light">
                  Projects
                </Typography>
                <IcRight />
              </>
            )}
            <HStack gap={8}>
              <IcProject />
              <Typography variant="body-r" color="white-light" noWrap>
                홈큐_자산관리_서비스_개발
              </Typography>
            </HStack>
          </>
        ) : active === "Project03" ? (
          <>
            {hasPath && (
              <>
                <Typography variant="body-r" color="white-light">
                  Projects
                </Typography>
                <IcRight />
              </>
            )}
            <HStack gap={8}>
              <IcProject />
              <Typography variant="body-r" color="white-light" noWrap>
                홈큐_전세지키미_서비스_개발
              </Typography>
            </HStack>
          </>
        ) : active === "Project04" ? (
          <>
            {hasPath && (
              <>
                <Typography variant="body-r" color="white-light">
                  Projects
                </Typography>
                <IcRight />
              </>
            )}
            <HStack gap={8}>
              <IcProject />
              <Typography variant="body-r" color="white-light" noWrap>
                은행사_서비스_제휴_업무
              </Typography>
            </HStack>
          </>
        ) : active === "Project05" ? (
          <>
            {hasPath && (
              <>
                <Typography variant="body-r" color="white-light">
                  Projects
                </Typography>
                <IcRight />
              </>
            )}
            <HStack gap={8}>
              <IcProject />
              <Typography variant="body-r" color="white-light">
                기타_업무
              </Typography>
            </HStack>
          </>
        ) : (
          <></>
        )}
      </HStack>
    </VStack>
  )
}
export default PathInfo
