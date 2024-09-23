import { ColorsType, SpaceType } from "@styles/mainTheme"
import { BoxContainer } from "./styled"

export interface BoxProps {
  children: React.ReactNode | React.ReactNode[]
  p?: string
  pt?: SpaceType
  pr?: SpaceType
  pb?: SpaceType
  pl?: SpaceType
  m?: string
  mt?: SpaceType
  mr?: SpaceType
  mb?: SpaceType
  ml?: SpaceType
  bg?: ColorsType
  border?: string
  borderRadius?: SpaceType
  width?: string
  height?: string
  minWidth?: string
  minHeight?: string
  maxWidth?: string
  maxHeight?: string
  justifyContent?: string
  alignItems?: string
  flexGrow?: number
  overflowX?: string
  overflowY?: string
  boxShadow?: string
  onClick?: () => void
}

const Box = ({ children, ...props }: BoxProps) => {
  return <BoxContainer {...props}>{children}</BoxContainer>
}

export default Box
