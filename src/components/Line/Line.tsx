import { HorizontalLine } from "./styled"

interface Props {
  color?: string
  height?: string
}

const Line = ({ color = "#ababab", height = "1px" }: Props) => {
  return <HorizontalLine $color={color} $height={height} />
}

export default Line
