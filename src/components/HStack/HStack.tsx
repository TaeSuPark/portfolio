import { SpaceType } from "@styles/mainTheme"
import { BoxProps } from "../Box/Box"
import { HStackContainer } from "./styled"

interface HStackProps extends BoxProps {
  gap?: SpaceType
}

const HStack = ({ children, gap = 0, ...props }: HStackProps) => {
  return (
    <HStackContainer $gap={gap} {...props}>
      {children}
    </HStackContainer>
  )
}

export default HStack
