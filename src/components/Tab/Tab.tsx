import HStack from "../HStack/HStack"
import { VTabContainer, HTabContainer } from "./styles"

import IcClose from "@assets/ic_close.svg"
interface TabProps {
  children: React.ReactNode | React.ReactNode[]
  selected: boolean
  direction?: "vertical" | "horizontal"
  onClick?: () => void
  onDelete?: (e: any) => void
}

const Tab = ({
  children,
  selected,
  direction = "horizontal",
  onClick,
  onDelete,
}: TabProps) => {
  return (
    <>
      {direction === "vertical" ? (
        <VTabContainer selected={selected} onClick={onClick}>
          {children}
        </VTabContainer>
      ) : (
        <HTabContainer selected={selected} onClick={onClick} gap={8}>
          {children}
          {onDelete && <IcClose onClick={onDelete} />}
        </HTabContainer>
      )}
    </>
  )
}
export default Tab
