import { Typography } from "@mui/material"
import { Container } from "./styled"

interface Props {
  title: string
  color?: string
}

const Tag = ({ title, color }: Props) => {
  return (
    <Container $color={color}>
      <Typography variant="caption" color="#DCDCDC" textAlign={"center"}>
        {title}
      </Typography>
    </Container>
  )
}

export default Tag
