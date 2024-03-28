import Bigtech from "/public/img_bigtech.svg"
import VStack from "../../VStack/VStack"
import HStack from "../../HStack/HStack"
import { CareerContainer, ContentsContainer, VerticalLine } from "./styled"
import { Typography } from "@mui/material"

const Career = () => {
  return (
    <CareerContainer>
      <ContentsContainer>
        <VStack>
          <Bigtech />
        </VStack>
        <VStack>
          <VerticalLine />
        </VStack>
        <VStack gap="48px">
          <VStack gap="12px">
            <Typography variant="h4" color="#CBCBCB">
              {`빅테크플러스 (주)`}
            </Typography>
            <Typography variant="h6" color="#ABABAB">
              {`2021.03 - 2023.09`}
            </Typography>
            <VStack>
              <Typography
                variant="subtitle1"
                color="#CBCBCB"
                style={{ wordBreak: "normal" }}
              >
                부동산 공적 장부 및 데이터 등을 통해 사용자에게 맞춤 정보를
                제공하는 프롭테크 스타트업입니다.
              </Typography>
              <Typography
                variant="subtitle1"
                color="#CBCBCB"
                style={{ wordBreak: "normal" }}
              >
                부동산자산관리서비스 홈큐와 등기, 대장 열람플랫폼 독큐를
                서비스하고 있습니다.
              </Typography>
              <Typography
                variant="subtitle1"
                color="#CBCBCB"
                style={{ wordBreak: "normal" }}
              >
                기본적으로 Spring Boot와 React 기반의 풀 스택 웹 개발을
                담당하였습니다. 서비스 기획 참여, figma를 통한 디자인 활용,
                Naver Cloud Platform 기반의 서버 구성 등의 업무와 병행하여
                진행했습니다.
              </Typography>
            </VStack>
          </VStack>
          <VStack gap="24px">
            {/* <Typography
              variant="h6"
              color="#CBCBCB"
              style={{ wordBreak: "normal" }}
            >
              1. 자사 서비스 개발
            </Typography> */}
            <VStack gap="12px">
              <VStack>
                <Typography
                  variant="h6"
                  color="#CBCBCB"
                  style={{ wordBreak: "normal" }}
                >
                  {`홈큐(Homeq) 신규 서비스 개발, 기능 개선 및 운영`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#ABABAB"
                  style={{ fontWeight: 400, wordBreak: "normal" }}
                >
                  {`2021.04 ~ 2023.09`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#ABABAB"
                  style={{ fontWeight: 400, wordBreak: "normal" }}
                >
                  {`skill : React, Next.js, React Query, Redux, Recoil, Styled Components, Spring Boot, Postgresql, MS-SQL, Cordova, Flutter`}
                </Typography>
              </VStack>
              <Typography
                variant="subtitle1"
                color="#CBCBCB"
                style={{ wordBreak: "normal", whiteSpace: "pre-line" }}
              >
                {`- 등기변동알림 서비스 개발
              - 자산관리 서비스 개발
              - 전세지키미 서비스 개발
              - 전입신고 및 확정일자 서비스 개발
              - 하나원큐 앱 내 등기변동알림 및 추천부동산 서비스 개발, 연계
              - 경남은행 앱 내 등기변동알림 및 추천부동산 서비스 개발, 연계
              - 부산은행 앱 내 등기변동알림 및 추천부동산 서비스 개발, 연계
              - KBSTAR 앱 내 등기변동알림 서비스 연계 및 데이터 송신을 위한 sftp 서버 구축
              - KB부동산 앱 내 전세지키미 서비스 개발 및 연계
              - 요구사항에 따른 지속적인 서비스 업데이트 및 크로스플랫폼 앱 업데이트
              `}
              </Typography>
            </VStack>
            <VStack gap="12px">
              <VStack p="12px 0 0 0">
                <Typography
                  variant="h6"
                  color="#CBCBCB"
                  style={{ wordBreak: "normal" }}
                >
                  {`온라인 등기, 대장 열람 및 관리 플랫폼 독큐(Docq) 서비스 개발`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#ABABAB"
                  style={{ fontWeight: 400, wordBreak: "normal" }}
                >
                  {`2021.10 ~ 2022.04`}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="#ABABAB"
                  style={{ fontWeight: 400, wordBreak: "normal" }}
                >
                  {`skill : React, React Query, Redux, Styled Components, Spring Boot, Postgresql, MS-SQL`}
                </Typography>
              </VStack>
              <Typography
                variant="subtitle1"
                color="#CBCBCB"
                style={{ wordBreak: "normal", whiteSpace: "pre-line" }}
              >
                {`- 서비스 데이터베이스 설계 및 구성
                  - React 기반 프론트엔드 프레임워크 구성
                  - 공통 컴포넌트 개발
                  - 회원 기능, 결제 연동 및 쿠폰 시스템, 공적장부 열람이력 관리, 관리자 기능 개발
                  - 등기변동 스케줄러 개발
                `}
              </Typography>
            </VStack>
          </VStack>
        </VStack>
      </ContentsContainer>
    </CareerContainer>
  )
}

export default Career
