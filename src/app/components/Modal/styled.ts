import styled from "styled-components"

export const ModalConatiner = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  justify-content: center;
  align-items: center;
`

export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20vw;
  min-height: 20vh;
  max-width: 80vw;
  max-height: 80vh;
  overflow-y: auto;
  padding: 12px;
  border-radius: 12px;
  background-color: #e5e5e5;
`
