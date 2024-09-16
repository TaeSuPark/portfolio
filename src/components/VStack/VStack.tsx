import { SpaceType } from "@styles/mainTheme"
import { BoxProps } from "../Box/Box"
import { VStackContainer } from "./styled"

interface VStackProps extends BoxProps {
  gap?: SpaceType
}

const VStack = ({ children, gap = 0, ...props }: VStackProps) => {
  return (
    <VStackContainer $gap={gap} {...props}>
      {children}
    </VStackContainer>
  )
}

export default VStack
