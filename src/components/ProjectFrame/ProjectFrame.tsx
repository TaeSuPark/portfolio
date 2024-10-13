import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import MarkdownLine from "../MarkdownLine/MarkdownLine"
import Modal from "../Modal/Modal"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"

import Img1_1 from "@assets/serv/img_1_1.svg"
import IcBigRight from "/public/ic_big_right.svg"
import IcBigLeft from "/public/ic_big_left.svg"
import { useState } from "react"

interface ProjectFrameProps {
  skills: { cnt: number; datas: string[] }
  works: { cnt: number; datas: string[] }
  imageList: any[]
}

const ProjectFrame = ({ skills, works, imageList }: ProjectFrameProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [imgIdx, setImgIdx] = useState<number>(0)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleLeft = () => {
    setImgIdx((imgIdx - 1 + imageList.length) % imageList.length)
  }

  const handleRight = () => {
    setImgIdx((imgIdx + 1) % imageList.length)
  }

  return (
    <VStack gap={8}>
      <MarkdownLine lineIdx={1} value="IMAGE LINK" state="title" />
      <MarkdownLine
        lineIdx={2}
        value="link : open image view"
        onClick={handleOpen}
        underline
      />
      <MarkdownLine lineIdx={3} value="" />
      <MarkdownLine lineIdx={4} value="SKILLS" state="title" />
      {skills.datas.map((v, idx) => (
        <MarkdownLine lineIdx={idx + 5} value={v} key={idx} />
      ))}
      <MarkdownLine lineIdx={5 + skills.cnt} value="" />
      <MarkdownLine lineIdx={6 + skills.cnt} value="WORKS" state="title" />
      {works.datas.map((v, idx) => (
        <MarkdownLine lineIdx={idx + 7 + skills.cnt} value={v} key={idx} />
      ))}
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <VStack gap={16} alignItems="center">
          <Typography variant="subtitle-m" color="white">
            {`IMAGE ${imgIdx + 1}`}
          </Typography>
          {imageList[imgIdx]}
          <HStack gap={32}>
            <VStack onClick={handleLeft}>
              <IcBigLeft />
            </VStack>
            <VStack onClick={handleRight}>
              <IcBigRight />
            </VStack>
          </HStack>
        </VStack>
      </Modal>
    </VStack>
  )
}

export default ProjectFrame
