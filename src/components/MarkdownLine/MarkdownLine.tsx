import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"

interface MarkdownLineProps {
  lineIdx: number
  value: string
  state?: "title" | "subtitle" | "body"
  underline?: boolean
  onClick?: () => void
}

const MarkdownLine = ({
  lineIdx,
  value,
  state = "body",
  underline,
  onClick,
}: MarkdownLineProps) => {
  return (
    <HStack gap={40}>
      <VStack width="20px" minWidth="20px">
        <Typography variant="body-r" color="grey-600" noWrap textAlign="right">
          {lineIdx}
        </Typography>
      </VStack>
      {state === "title" ? (
        <Typography variant="body-m" color="blue-main" noWrap>
          {`# ${value}`}
        </Typography>
      ) : state === "subtitle" ? (
        <Typography variant="body-r" color="blue-main" noWrap>
          {`## ${value}`}
        </Typography>
      ) : (
        <VStack onClick={onClick}>
          <Typography
            variant="body-r"
            color="white-light"
            noWrap
            underLine={underline}
          >
            {value}
          </Typography>
        </VStack>
      )}
    </HStack>
  )
}

export default MarkdownLine
