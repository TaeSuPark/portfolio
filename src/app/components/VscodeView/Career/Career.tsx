import VStack from "../../VStack/VStack"
import { CareerContainer, ContentsContainer } from "./styled"

import ProjectCard from "../../ProjectCard/ProjectCard"
import Modal from "../../Modal/Modal"
import { useState } from "react"
import Project1st from "../../ProjectDetails/Project1st"
import Project2nd from "../../ProjectDetails/Project2nd"
import Project3rd from "../../ProjectDetails/Project3rd"
import Project4th from "../../ProjectDetails/Project4th"

import Img1_1 from "/public/serv/img_1_1.svg"
import Img2_0 from "/public/serv/img_2_0.svg"
import Img3_0 from "/public/serv/img_3_0.svg"


const Career = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedProject, setSelectedProject] = useState<number>(1)

  return (
    <CareerContainer>
      <ContentsContainer>
        <VStack gap="24px" alignItems="center" justifyContent="center">
          <ProjectCard
            title="1. 부동산 공적장부 열람 플랫폼 독큐(DocQ) 개발"
            period="2021.10 - 2022.04"
            member="2 DEV | 1 DESIGN | DataLab"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
            ]}
            onDetail={() => {
              setSelectedProject(1)
              setIsOpen(true)
            }}
            svg={Img1_1}
          />
          <ProjectCard
            title="2. 홈큐(HomeQ) 자산관리 서비스 개발"
            period="2022.09 - 2022.12"
            member="1 DEV | 1 DESIGN | DataLab"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
              { name: "design", color: "#E27163" },
            ]}
            onDetail={() => {
              setSelectedProject(2)
              setIsOpen(true)
            }}
            svg={Img2_0}
          />
          <ProjectCard
            title="3. 홈큐(HomeQ) 전세지키미 서비스 개발"
            period="2023.06 - 2023.09"
            member="3 DEV | 1 DESIGN | DataLab"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
              { name: "design", color: "#E27163" },
            ]}
            onDetail={() => {
              setSelectedProject(3)
              setIsOpen(true)
            }}
            svg={Img3_0}
          />
          <ProjectCard
            title="4. 은행사 서비스 제휴 업무"
            period="2021.06 - 2023.09"
            member="1 DEV"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
            ]}
            onDetail={() => {
              setSelectedProject(4)
              setIsOpen(true)
            }}
            svg={undefined}
          />
          <Modal
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false)
            }}
          >
            {selectedProject === 1 ? (
              <Project1st />
            ) : selectedProject === 2 ? (
              <Project2nd />
            ) : selectedProject === 3 ? (
              <Project3rd />
            ) : (
              <Project4th />
            )}
          </Modal>
        </VStack>
      </ContentsContainer>
    </CareerContainer>
  )
}

export default Career
