import { projectData } from "@src/utils/Datas"
import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import Line from "../Line/Line"
import ProjectFrame from "../ProjectFrame/ProjectFrame"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"
import { OverflowContainer } from "./styled"
import Img1_1 from "/public/serv/img_1_1.svg"
import Img1_2 from "/public/serv/img_1_2.svg"
import Img1_3 from "/public/serv/img_1_3.svg"

const Project01 = () => {
  const { skills, works, imageList } = projectData.Project01
  return (
    <VStack p="20px 12px">
      <ProjectFrame skills={skills} works={works} imageList={imageList} />
    </VStack>
  )
}

export default Project01
