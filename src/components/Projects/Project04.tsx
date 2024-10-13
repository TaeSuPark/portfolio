import MarkdownLine from "../MarkdownLine/MarkdownLine"
import VStack from "../VStack/VStack"

const Project04 = () => {
  return (
    <VStack p="20px 12px">
      <VStack gap={8}>
        <MarkdownLine lineIdx={1} value="WORKS" state="title" />
        <MarkdownLine lineIdx={2} value="" />
        <MarkdownLine lineIdx={3} value="하나은행" state="subtitle" />
        <MarkdownLine lineIdx={4} value="2021.07 - 2021.09" />
        <MarkdownLine
          lineIdx={5}
          value="- 추천 부동산, 등기변동알림 서비스 제휴"
        />
        <MarkdownLine lineIdx={6} value="" />
        <MarkdownLine lineIdx={7} value="경남은행" state="subtitle" />
        <MarkdownLine lineIdx={8} value="2022.03 - 2022.05" />
        <MarkdownLine
          lineIdx={9}
          value="- 추천 부동산, 등기변동알림 서비스 제휴(+자산관리 추가 제휴)"
        />
        <MarkdownLine lineIdx={10} value="" />
        <MarkdownLine lineIdx={11} value="부산은행" state="subtitle" />
        <MarkdownLine lineIdx={12} value="2022.06 - 2022.08" />
        <MarkdownLine
          lineIdx={13}
          value="- 추천 부동산, 등기변동알림 서비스 제휴"
        />
        <MarkdownLine lineIdx={14} value="" />
        <MarkdownLine lineIdx={15} value="KBSTAR" state="subtitle" />
        <MarkdownLine lineIdx={16} value="2023.03 - 2023.05" />
        <MarkdownLine
          lineIdx={17}
          value="- 등기변동알림 서비스 제휴(+기업용 KBSTAR 추가 제휴)"
        />
        <MarkdownLine lineIdx={18} value="" />
        <MarkdownLine lineIdx={19} value="KB부동산" state="subtitle" />
        <MarkdownLine lineIdx={20} value="2023.06 - 2023.09" />
        <MarkdownLine
          lineIdx={21}
          value="- 전세지키미(보증금안전진단) 서비스 제휴"
        />
      </VStack>
    </VStack>
  )
}

export default Project04
