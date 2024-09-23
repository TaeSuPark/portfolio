import styled, { keyframes } from "styled-components"

const blinking = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`

export const BlinkingCursor = styled.span`
  animation: ${blinking} 1s step-end infinite;
`
