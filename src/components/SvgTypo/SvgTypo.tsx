import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"
import { ColorsType } from "@src/styles/mainTheme"
import { SvgContainer } from "./styled"

interface SvgTypoProps {
  value: string
  svg: any
  color?: ColorsType
  variant?: "body-r" | "body-m" | "body-b"
  p?: string
  onClick?: () => void
}

const SvgTypo = ({
  value,
  svg,
  color = "grey-hide",
  variant = "body-r",
  p,
  onClick,
}: SvgTypoProps) => {
  return (
    <SvgContainer gap={8} onClick={onClick} p={p}>
      {svg}
      <Typography variant={variant} color={color}>
        {value}
      </Typography>
    </SvgContainer>
  )
}

export default SvgTypo
