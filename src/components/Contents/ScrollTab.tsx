import HStack from "../HStack/HStack"
import EmptyTab from "../Tab/EmptyTab"
import Tab from "../Tab/Tab"
import VStack from "../VStack/VStack"

import Typography from "../Typography/Typograpy"
import { useRecoilState } from "recoil"
import { activeFileState, tabState } from "@src/recoil/dataAtom"
import { ScrollTabContainer } from "./styled"
import React, { useCallback, useRef, useState } from "react"

const ScrollTab = () => {
  const [tab, setTab] =
    useRecoilState<{ label: string; value: string; svg: any }[]>(tabState)

  const [active, setActive] = useRecoilState<string | undefined>(
    activeFileState
  )

  const containerRef = useRef<any>(null)
  const [isDrag, setIsDrag] = useState<boolean>(false)
  const [startX, setStartX] = useState<number>(0)
  const [totalX, setTotalX] = useState<number>(0)

  const stopEffects = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const onDragStart = (e: React.MouseEvent) => {
    stopEffects(e)
    setIsDrag(true)
    const x = e.clientX
    setStartX(x)
    if (containerRef.current && "scrollLeft" in containerRef.current) {
      setTotalX(x + containerRef.current.scrollLeft)
    }
  }
  const onDragMove = (e: React.MouseEvent) => {
    stopEffects(e)
    if (!isDrag) return

    const scrollLeft = totalX - e.clientX

    if (containerRef.current && "scrollLeft" in containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft
    }
  }
  const onDragEnd = (e: React.MouseEvent) => {
    stopEffects(e)
    if (!isDrag) return
    if (!containerRef.current) return

    setIsDrag(false)

    const endX = e.clientX
    const childNodes = [...(containerRef.current?.childNodes || [])]
    const dragDiff = Math.abs(startX - endX)
    if (dragDiff > 10) {
      childNodes.forEach((child) => {
        child.addEventListener("click", stopEffects)
      })
    } else {
      childNodes.forEach((child) => {
        child.removeEventListener("click", stopEffects)
      })
    }
  }

  return (
    <ScrollTabContainer
      ref={containerRef}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
    >
      {tab.map((t, idx) => (
        <Tab
          key={idx}
          onClick={() => {
            setActive(t.value)
          }}
          onDelete={(e: any) => {
            e.stopPropagation()
            if (active === t.value) {
              setActive(
                tab[idx - 1]
                  ? tab[idx - 1].value
                  : tab[idx + 1]
                  ? tab[idx + 1].value
                  : undefined
              )
              setTab(tab.filter((v) => v.value !== t.value))
            } else {
              tab.length === 1 && setActive(undefined)
              setTab(tab.filter((v) => v.value !== t.value))
            }
          }}
          selected={t.value === active}
        >
          <HStack gap={4} alignItems="center">
            {t.svg}
            <Typography variant="body-r" color="green-main">
              {t.label}
            </Typography>
          </HStack>
        </Tab>
      ))}
      {tab.length !== 0 && <EmptyTab />}
    </ScrollTabContainer>
  )
}

export default ScrollTab
