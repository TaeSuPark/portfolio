import styled from "styled-components"

interface BoxStyledProps {}

const Container = styled.div<BoxStyledProps>`
  dixplay: block;
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: #121212;
  top: 0;
  right: 0;
  opacity: 0.9;
`
export default Container
