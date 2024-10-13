import VStack from "../VStack/VStack"
import {
  Line1,
  Line3,
  Line4,
  Line5,
  Line6,
  Line7,
  Line8,
  Line9,
  Line10,
  Line11,
  Line12,
  Line13,
  Line15,
} from "../EditorArea"
import Typography2 from "../Typography/Typograpy"
import EditorLine from "../EditorLine/EditorLine"
import { Typography } from "@mui/material"

const Introduction = () => {
  return (
    <VStack p="20px 12px" gap={8}>
      <EditorLine lineIdx={1}>
        <Line1 />
      </EditorLine>
      <EditorLine lineIdx={2}>
        <></>
      </EditorLine>
      <EditorLine lineIdx={3}>
        <Line3 />
      </EditorLine>
      <EditorLine lineIdx={4}>
        <Line4 />
      </EditorLine>
      <EditorLine lineIdx={5}>
        <Line5 />
      </EditorLine>
      <EditorLine lineIdx={6}>
        <Line6 />
      </EditorLine>
      <EditorLine lineIdx={7}>
        <Line7 />
      </EditorLine>
      <EditorLine lineIdx={8}>
        <Line8 />
      </EditorLine>
      <EditorLine lineIdx={9}>
        <Line9 />
      </EditorLine>
      <EditorLine lineIdx={10}>
        <Line10 />
      </EditorLine>
      <EditorLine lineIdx={11}>
        <Line11 />
      </EditorLine>
      <EditorLine lineIdx={12}>
        <Line12 />
      </EditorLine>
      <EditorLine lineIdx={13}>
        <Line13 />
      </EditorLine>
      <EditorLine lineIdx={14}>
        <></>
      </EditorLine>
      <EditorLine lineIdx={15}>
        <Line15 />
      </EditorLine>
    </VStack>
  )
}

export default Introduction
