import HStack from "../HStack/HStack"
import { Typography } from "@mui/material"
import { BlinkingCursor } from "./styled"
import VStack from "../VStack/VStack"

const Line15 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="48px"
      >
        {`15`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#B484BC"
        pr="12px"
      >
        {`export`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#B484BC"
        pr="12px"
      >
        {`default`}
      </Typography>

      <Typography variant="h6" style={{ fontWeight: 400 }} color="#DBDBAB">
        {`Introduction`}
      </Typography>
      <BlinkingCursor>
        <Typography variant="h5" style={{ fontWeight: 400 }} color="#CBCBCB">
          {`|`}
        </Typography>
      </BlinkingCursor>
    </HStack>
  )
}
export default Line15
