import styled from "styled-components"

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  width: max-content;
  align-items: center;
  cursor: pointer;

  &:hover > * {
    color: #5388e1;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  width: 90%;
  border-radius: 12px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background-color: #2f2f2f;
`
export const CardBottom = styled.div<{ processing: boolean }>`
  display: flex;
  flex-direction: column;
  height: 5px;
  padding: 0 24px;
  width: 90%;
  border-radius: 12px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  ${(props) =>
    props.processing
      ? `background-image: linear-gradient(to right, #4277d0 50%, #3f3f3f 50%);`
      : `background-color: #4277d0;`}
`

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid #2f2f2f;
  background-color: #1e1e1e;
  border-left: none;
  border-bottom: none;
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
  //   &:hover {
  //     background-color: #242424;
  //     border-bottom: 1px solid #242424;
  //   }
`

export const EmptyTab = styled.div`
  padding: 8px 16px;
  border-right: 1px solid #2f2f2f;
  color: #f2f2f2;
  font-size: 16px;
  font-weight: 400;
  background-color: #1e1e1e;
  border-bottom: 1px solid #2f2f2f;
  flex-grow: 1;
`
