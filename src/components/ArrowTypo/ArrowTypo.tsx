import IcDown from "@assets/ic_down.svg"
import IcRight from "@assets/ic_right.svg"
import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"
import { ColorsType, SpaceType } from "@src/styles/mainTheme"
import { ArrowContainer } from "./styled"

interface ArrowTypoProps {
  value: string
  isOpen: boolean
  color?: ColorsType
  variant?: "body-r" | "body-m" | "body-b"
  p?: string
  hovered?: boolean
  onClick?: () => void
}

const ArrowTypo = ({
  value,
  isOpen,
  color = "grey-hide",
  variant = "body-r",
  p,
  hovered,
  onClick,
}: ArrowTypoProps) => {
  return (
    <ArrowContainer gap={4} onClick={onClick} p={p}>
      {isOpen ? <IcDown /> : <IcRight />}
      <Typography variant={variant} color={color}>
        {value}
      </Typography>
    </ArrowContainer>
  )
}

export default ArrowTypo
