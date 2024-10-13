import React from "react"
import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"
import VStack from "../VStack/VStack"

interface EditorLineProps {
  lineIdx: number
  children: React.ReactNode
}

const EditorLine = ({ lineIdx, children }: EditorLineProps) => {
  return (
    <HStack gap={40}>
      <VStack width="20px" minWidth="20px">
        <Typography variant="body-r" color="grey-600" noWrap textAlign="right">
          {lineIdx}
        </Typography>
      </VStack>
      {children}
    </HStack>
  )
}

export default EditorLine
