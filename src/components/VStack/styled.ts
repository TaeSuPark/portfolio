import styled from "styled-components"
import Box from "../Box/Box"
import { BoxStyledProps } from "../Box/styled"
import mainTheme, { SpaceType } from "@styles/mainTheme"

interface VStackStyleProps extends BoxStyledProps {
  $gap: SpaceType
  onClick?: () => void
}

export const VStackContainer = styled(Box)<VStackStyleProps>`
  flex-direction: column;
  row-gap: ${({ $gap }) => mainTheme.space[$gap]};
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`
