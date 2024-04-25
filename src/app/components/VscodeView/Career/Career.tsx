import VStack from "../../VStack/VStack"
import { CareerContainer, ContentsContainer, VerticalLine } from "./styled"

import ProjectCard from "../../ProjectCard/ProjectCard"

const Career = () => {
  return (
    <CareerContainer>
      <ContentsContainer>
        <VStack gap="24px" alignItems="center" justifyContent="center">
          <ProjectCard
            title="1. 부동산 공적장부 열람 플랫폼 독큐(DocQ) 개발"
            period="2021.10 - 2022.04"
            member="개발 2, 디자인 1"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
            ]}
            onDetail={() => {}}
            svg={undefined}
          />
          <ProjectCard
            title="2. 홈큐(HomeQ) 자산관리 서비스 개발"
            period="2022.09 - 2022.12"
            member="개발 1, 디자인 1"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
              { name: "design", color: "#E27163" },
            ]}
            onDetail={() => {}}
            svg={undefined}
          />
          <ProjectCard
            title="3. 홈큐(HomeQ) 전세지키미 서비스 개발"
            period="2023.06 - 2023.09"
            member="개발 3, 디자인 1"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
              { name: "design", color: "#E27163" },
            ]}
            onDetail={() => {}}
            svg={undefined}
          />
          <ProjectCard
            title="4. 은행사 서비스 제휴 업무"
            period="2021.06 - 2023.09"
            member="개발 1"
            task={[
              { name: "database", color: "#486782" },
              { name: "front", color: "#4479C8" },
              { name: "back", color: "#8DAA51" },
              { name: "deploy", color: "#7C2775" },
            ]}
            onDetail={() => {}}
            svg={undefined}
          />
          <ProjectCard
            title="5. 개인 소개 페이지 개발"
            period="2024.03 - "
            member="개발 1"
            task={[
              { name: "front", color: "#4479C8" },
              { name: "deploy", color: "#7C2775" },
              { name: "design", color: "#E27163" },
            ]}
            onDetail={() => {}}
            svg={undefined}
          />
        </VStack>
      </ContentsContainer>
    </CareerContainer>
  )
}

export default Career
