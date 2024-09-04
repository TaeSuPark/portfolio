import styled from "styled-components"

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #2f2f2f;
  background-color: #1e1e1e;
  border-left: none;
  border-bottom: none;
  @media (min-width: 768px) {
    width: 70vw;
  }
`

export const Tab = styled.div<{ selected: boolean }>`
  padding: 8px 16px;
  border-right: 1px solid #2f2f2f;
  color: #f2f2f2;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;

  background-color: ${({ selected }) => (selected ? "#242424" : "#1e1e1e")};
  border-top: ${(props) =>
    props.selected ? "2px solid #4377d0" : "2px solid #1e1e1e"};
  border-bottom: ${(props) =>
    props.selected ? "1px solid #242424" : "1px solid #2f2f2f"};
  &:hover {
    background-color: #242424;
  }
`

export const EmptyTab = styled.div`
  border-right: 1px solid #2f2f2f;
  font-size: 16px;
  font-weight: 400;
  background-color: #1e1e1e;
  border-bottom: 1px solid #2f2f2f;
  flex-grow: 1;
`
export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  border: 1px solid #2f2f2f;
  background-color: #242424;
  border-left: none;
  border-top: none;
  flex-grow: 1;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const OverContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  background-color: #1e1e1e;
`

export const MobileAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  flex-grow: 1;
  @media (min-width: 768px) {
    display: none;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  width:70vw
  flex-direction: column;
  justify-content: center;
  padding: 24px;
`

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  gap: 24px;
  padding: 12px 48px;
  background-color: #242424;
`

export const PcAbout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;

  flex-grow: 1;
  @media (max-width: 768px) {
    display: none;
  }
`
