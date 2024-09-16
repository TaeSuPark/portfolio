import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line12 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="76px"
      >
        {`12`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B484BC">
        {`)`}
      </Typography>
    </HStack>
  )
}
export default Line12
