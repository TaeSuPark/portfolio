import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line10 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="132px"
      >
        {`10`}
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
        {`Certificate`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B0DBFC">
        {` when`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#D3D3D3">
        {`=`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#5A9AF4">
        {`{`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B28972">
        {`"22.06.17"`}
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
        {`정보처리기사`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`</`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#72C3AD">
        {`Certificate`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#6D6D6D">
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line10
