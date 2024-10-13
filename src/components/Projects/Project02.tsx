import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import VStack from "../VStack/VStack"

import Img2_1 from "/public/serv/img_2_1.svg"
import Img2_2 from "/public/serv/img_2_2.svg"
import Img2_3 from "/public/serv/img_2_3.svg"
import Img2_4 from "/public/serv/img_2_4.svg"

import Typography from "../Typography/Typograpy"
import Card from "../Card/Card"
import { OverflowContainer } from "./styled"
import ProjectFrame from "../ProjectFrame/ProjectFrame"
import { projectData } from "@src/utils/Datas"

const Project02 = () => {
  const { skills, works, imageList } = projectData.Project02
  return (
    <VStack p="20px 12px">
      <ProjectFrame skills={skills} works={works} imageList={imageList} />
    </VStack>
  )
}

export default Project02
