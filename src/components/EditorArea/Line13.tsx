import HStack from "../HStack/HStack"
import { Typography } from "@mui/material"

const Line13 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="48px"
      >
        {`13`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#F5D532">
        {`}`}
      </Typography>
    </HStack>
  )
}
export default Line13
