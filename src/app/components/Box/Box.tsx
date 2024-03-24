import Container from "./styled"

interface BoxProps {
  children: React.ReactNode | React.ReactNode[]
}

const Box: React.FC<BoxProps> = ({ children }) => {
  return <Container>{children}</Container>
}

export default Box
