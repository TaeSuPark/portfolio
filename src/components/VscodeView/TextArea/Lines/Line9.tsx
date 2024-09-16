import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line9 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="132px"
        pl="12px"
      >
        {`9`}
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
        {`Education`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B0DBFC">
        {`major`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#D3D3D3">
        {`=`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#5A9AF4">
        {`{`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#B28972"
        whiteSpace={"nowrap"}
      >
        {`"컴퓨터공학전공"`}
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
        {`동국대학교(서울)`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`</`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#72C3AD">
        {`Education`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line9
