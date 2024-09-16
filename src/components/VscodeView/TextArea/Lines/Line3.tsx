import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line3 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="48px"
        pl="12px"
      >
        {`3`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6F9AD3"
        pr="12px"
      >
        const
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#DBDBAB"
        pr="12px"
      >
        About
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#D3D3D3"
        pr="12px"
      >
        =
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#F5D532"
        pr="6px"
      >
        {`(`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#F5D532"
        pr="12px"
      >
        {`)`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6F9AD3"
        pr="12px"
      >
        {`=>`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#F5D532">
        {`{`}
      </Typography>
    </HStack>
  )
}
export default Line3
