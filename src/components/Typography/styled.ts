import { VariantsType, ColorsType } from "@styles/mainTheme"
import styled from "styled-components"
import mainTheme from "@styles/mainTheme"

interface TypographyProps {
  $variant: VariantsType
  $color: ColorsType
  $textAlign: string
  $underLine?: boolean
  $italic?: boolean
  ellipsis?: boolean
  noWrap?: boolean
  pl?: number
}

export const Span = styled.span<TypographyProps>`
  text-align: ${({ $textAlign }) => $textAlign};
  font-weight: ${({ $variant }) => mainTheme.variants[$variant].weight};
  font-size: ${({ $variant }) => mainTheme.variants[$variant].size};
  color: ${({ $color }) => mainTheme.colors[$color]};
  text-decoration: ${({ $underLine }) => ($underLine ? "underline" : "none")};
  font-style: ${({ $italic }) => ($italic ? "italic" : "normal")};
  padding-left: ${({ pl }) => pl}px;
  white-space: ${({ noWrap }) => (noWrap ? "nowrap" : "normal")};
  overflow: ${({ ellipsis }) => (ellipsis ? "hidden" : "visible")};
`
