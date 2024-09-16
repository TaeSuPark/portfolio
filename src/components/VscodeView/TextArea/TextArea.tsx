import { Typography } from "@mui/material"
import HStack from "../../HStack/HStack"
import VStack from "../../VStack/VStack"
import Line1 from "./Lines/Line1"
import Line3 from "./Lines/Line3"
import Line4 from "./Lines/Line4"
import Line5 from "./Lines/Line5"
import Line6 from "./Lines/Line6"
import Line7 from "./Lines/Line7"
import Line8 from "./Lines/Line8"
import Line9 from "./Lines/Line9"
import Line10 from "./Lines/Line10"
import Line11 from "./Lines/Line11"
import Line12 from "./Lines/Line12"
import Line13 from "./Lines/Line13"
import Line15 from "./Lines/Line15"

const TextArea = () => {
  return (
    <VStack gap="4px" p="0 24px 30px 24px">
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
export default TextArea
