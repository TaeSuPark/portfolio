import styled from "styled-components"
import Box from "../Box/Box"
import { BoxStyledProps } from "../Box/styled"
import mainTheme, { SpaceType } from "@styles/mainTheme"

interface HStackStyleProps extends BoxStyledProps {
  $gap: SpaceType
}

export const HStackContainer = styled(Box)<HStackStyleProps>`
  flex-direction: row;
  column-gap: ${({ $gap }) => mainTheme.space[$gap]};
`
