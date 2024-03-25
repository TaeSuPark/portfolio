import HStack from "@/app/components/HStack/HStack"
import { Typography } from "@mui/material"

const Line1 = () => {
  return (
    <HStack>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#6f7680"
        pr="48px"
        pl="12px"
      >
        {`1`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#B484BC"
        pr="12px"
      >
        import
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#F5D532"
        pr="12px"
      >
        {`{`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B0DBFC">
        {`HostName`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#D3D3D3"
        pr="12px"
      >
        {`,`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B0DBFC">
        {`Tel`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#D3D3D3"
        pr="12px"
      >
        {`,`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B0DBFC">
        {`Email`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#D3D3D3"
        pr="12px"
      >
        {`,`}
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B0DBFC">
        {`Education`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#D3D3D3"
        pr="12px"
      >
        {`,`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#B0DBFC"
        pr="12px"
      >
        {`Certificate`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#F5D532"
        pr="12px"
      >
        {`}`}
      </Typography>
      <Typography
        variant="h6"
        style={{ fontWeight: 400 }}
        color="#B484BC"
        pr="12px"
      >
        from
      </Typography>
      <Typography variant="h6" style={{ fontWeight: 400 }} color="#B28972">
        {`"@park/data"`}
      </Typography>
    </HStack>
  )
}
export default Line1
