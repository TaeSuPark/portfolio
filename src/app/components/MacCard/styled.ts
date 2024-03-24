import styled from "styled-components"

interface MacCardStyledProps {}

export const MenuContainer = styled.div`
  display: flex;
  padding: 8px;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  border: 1px solid #d5d5d5;
  background-color: #e7e3df;
`

export const TopContainer = styled.div`
  display: flex;
  padding: 8px;
  border-top-right-radius: 16px;
  border: 1px solid #d5d5d5;
  border-left: 0;
  background-color: #fbf7f2;
`

export const ViewContainer = styled.div`
  display: flex;
  padding: 12px 0px 12px 20px;
  border-bottom-right-radius: 16px;
  border: 1px solid #d5d5d5;
  border-top: 0;
  border-left: 0;
  background-color: #ffffff;
  flex-grow: 1;
  overflow-y: auto;
`

export const SelectedContainer = styled.div<{ selected: boolean }>`
  display: flex;
  padding: 5px 8px;
  border-radius: 8px;
  background-color: ${(props) => (props.selected ? "#cfcbc7" : "transparent")};
  cursor: pointer;
`
