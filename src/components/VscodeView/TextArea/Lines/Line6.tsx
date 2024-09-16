import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line6 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="132px"
        pl="12px"
      >
        {`6`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6f7680">
        {`<`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#72C3AD"
        pr="12px"
      >
        {`HostName`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B0DBFC">
        {` birth`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#D3D3D3">
        {`=`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#5A9AF4">
        {`{`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B28972">
        {`"95.01.29"`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#5A9AF4">
        {`}`}
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
        {`박태수`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`</`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#72C3AD">
        {`HostName`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line6
