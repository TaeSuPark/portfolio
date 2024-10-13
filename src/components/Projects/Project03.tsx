import { projectData } from "@src/utils/Datas"
import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import { OverflowContainer } from "./styled"

import Img3_1 from "/public/serv/img_3_1.svg"
import Img3_2 from "/public/serv/img_3_2.svg"
import Img3_3 from "/public/serv/img_3_3.svg"
import Img3_4 from "/public/serv/img_3_4.svg"
import Img3_5 from "/public/serv/img_3_5.svg"
import ProjectFrame from "../ProjectFrame/ProjectFrame"

const Project03 = () => {
  const { skills, works, imageList } = projectData.Project03
  return (
    <VStack p="20px 12px">
      <ProjectFrame skills={skills} works={works} imageList={imageList} />
    </VStack>
  )
}

export default Project03
