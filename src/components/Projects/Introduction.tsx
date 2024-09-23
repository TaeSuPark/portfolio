import Typography from "@mui/material/Typography"
import HStack from "../HStack/HStack"
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

const Introduction = () => {
  return (
    <VStack gap={4} p="0 24px 30px 24px">
      <Line1 />
      <HStack>
        <Typography
          variant="h6"
          style={{ fontWeight: 400 }}
          color="#6f7680"
          pl="12px"
        >
          {`2`}
        </Typography>
      </HStack>
      <Line3 />
      <Line4 />
      <Line5 />
      <Line6 />
      <Line7 />
      <Line8 />
      <Line9 />
      <Line10 />
      <Line11 />
      <Line12 />
      <Line13 />
      <HStack>
        <Typography variant="h6" style={{ fontWeight: 400 }} color="#6f7680">
          {`14`}
        </Typography>
      </HStack>
      <Line15 />
    </VStack>
  )
}

export default Introduction
