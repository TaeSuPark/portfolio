import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line7 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="132px"
        pl="12px"
      >
        {`7`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6f7680">
        {`<`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#72C3AD">
        {`Tel`}
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
        {`010-4109-9841`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`</`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#72C3AD">
        {`Tel`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line7
