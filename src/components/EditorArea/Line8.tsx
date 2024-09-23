import HStack from "../HStack/HStack"
import { Typography } from "@mui/material"

const Line8 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="132px"
        pl="12px"
      >
        {`8`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6f7680">
        {`<`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#72C3AD">
        {`Email`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6f7680">
        {`>`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#D3D3D3"
        whiteSpace={"nowrap"}
      >
        {`ptss0129@gmail.com`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`</`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#72C3AD">
        {`Email`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line8
