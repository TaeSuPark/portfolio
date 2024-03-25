import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

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
        {`About`}
      </Typography>
    </HStack>
  )
}
export default Line15
