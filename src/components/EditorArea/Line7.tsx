import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

const Line7 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="grey-hide" pl={60} noWrap>
        {`<`}
      </Typography>
      <Typography variant="body-r" color="green-bold" noWrap>
        Tel
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        {`010-4109-9841`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`</`}
      </Typography>
      <Typography variant="body-r" color="green-bold" noWrap>
        Tel
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line7
