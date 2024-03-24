import { Container } from "./styled"

interface CardProps {
  children: React.ReactNode | React.ReactNode[]
  bg?: string
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ children, bg = "#ffffff", onClick }) => {
  return (
    <Container $bg={bg} onClick={onClick}>
      {children}
    </Container>
  )
}
export default Card
