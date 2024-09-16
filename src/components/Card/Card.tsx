import VStack from "../VStack/VStack"
import { CardBottom, CardContainer } from "./styled"

interface CardProps {
  children: React.ReactNode | React.ReactNode[]
  onClick?: () => void
}

const Card = ({ children, onClick }: CardProps) => {
  return (
    <VStack flexGrow={1}>
      <CardContainer onClick={onClick}>{children}</CardContainer>
      <CardBottom $processing={false} />
    </VStack>
  )
}
export default Card
