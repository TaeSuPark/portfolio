import { EmptyHTabContainer, EmptyVTabContainer } from "./styles"

interface EmptyTabProps {
  direction?: "vertical" | "horizontal"
}

const EmptyTab = ({ direction = "horizontal" }: EmptyTabProps) => {
  return direction === "vertical" ? (
    <EmptyVTabContainer />
  ) : (
    <EmptyHTabContainer />
  )
}
export default EmptyTab
