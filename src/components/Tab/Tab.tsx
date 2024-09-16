import { VTabContainer, HTabContainer } from "./styles"

interface TabProps {
  children: React.ReactNode | React.ReactNode[]
  selected: boolean
  direction?: "vertical" | "horizontal"
  onClick?: () => void
}

const Tab = ({
  children,
  selected,
  direction = "horizontal",
  onClick,
}: TabProps) => {
  return (
    <>
      {direction === "vertical" ? (
        <VTabContainer selected={selected} onClick={onClick}>
          {children}
        </VTabContainer>
      ) : (
        <HTabContainer selected={selected} onClick={onClick}>
          {children}
        </HTabContainer>
      )}
    </>
  )
}
export default Tab
