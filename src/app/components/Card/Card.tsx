import VStack from "../VStack/VStack"
import { CardBottom, Container } from "./styled"

interface CardProps {
  children: React.ReactNode | React.ReactNode[]
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ children, onClick }) => {
  return (
    <VStack flexGrow={1}>
      <Container onClick={onClick}>{children}</Container>
      <CardBottom $processing={false} />
    </VStack>
  )
}
export default Card
