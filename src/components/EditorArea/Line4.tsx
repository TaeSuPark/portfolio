import HStack from "../HStack/HStack"
import { Typography } from "@mui/material"

const Line4 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="76px"
        pl="12px"
      >
        {`4`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#B484BC"
        pr="12px"
      >
        {`return`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B484BC">
        {`(`}
      </Typography>
    </HStack>
  )
}
export default Line4
