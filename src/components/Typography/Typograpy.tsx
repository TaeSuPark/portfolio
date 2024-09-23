import { VariantsType, ColorsType, SpaceType } from "@styles/mainTheme"
import { Span } from "./styled"

interface TypographyProps {
  variant: VariantsType
  color?: ColorsType
  textAlign?: string
  underLine?: boolean
  italic?: boolean
  pl?: SpaceType
  children: React.ReactNode
}

const Typography = ({
  variant,
  color = "grey-100",
  textAlign = "left",
  underLine,
  italic,
  pl,
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
    >
      {children}
    </Span>
  )
}

export default Typography
