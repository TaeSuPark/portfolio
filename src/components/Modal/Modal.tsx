import VStack from "../VStack/VStack"
import HStack from "../HStack/HStack"
import { ModalConatiner, ModalContentContainer } from "./styled"
import IcClose from "/public/ic_close.svg"
interface Props {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Modal = ({ children, isOpen, onClose }: Props) => {
  return (
    <ModalConatiner $isOpen={isOpen}>
      <ModalContentContainer>
        <VStack gap={16}>
          <HStack justifyContent="flex-end">
            <div style={{ cursor: "pointer" }}>
              <IcClose onClick={onClose} />
            </div>
          </HStack>
          {children}
        </VStack>
      </ModalContentContainer>
    </ModalConatiner>
  )
}
export default Modal
