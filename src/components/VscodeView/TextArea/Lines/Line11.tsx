import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line11 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="104px"
      >
        {`11`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`<>`}
      </Typography>
    </HStack>
  )
}
export default Line11
