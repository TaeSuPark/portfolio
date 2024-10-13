import { VariantsType, ColorsType, SpaceType } from "@styles/mainTheme"
import { Span } from "./styled"

interface TypographyProps {
  variant: VariantsType
  color?: ColorsType
  textAlign?: string
  underLine?: boolean
  italic?: boolean
  pl?: SpaceType
  pr?: SpaceType
  ellipsis?: boolean
  noWrap?: boolean
  children: React.ReactNode
}

const Typography = ({
  variant,
  color = "grey-100",
  textAlign = "left",
  underLine,
  italic,
  pl,
  pr,
  ellipsis,
  noWrap,
  children,
}: TypographyProps) => {
  return (
    <Span
      $variant={variant}
      $color={color}
      $textAlign={textAlign}
      $underLine={underLine}
      $italic={italic}
      pl={pl}
      pr={pr}
      ellipsis={ellipsis}
      noWrap={noWrap}
    >
      {children}
    </Span>
  )
}

export default Typography
