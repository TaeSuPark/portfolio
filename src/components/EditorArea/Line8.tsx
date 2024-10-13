import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

const Line8 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="grey-hide" pl={60} noWrap>
        {`<`}
      </Typography>
      <Typography variant="body-r" color="green-bold" noWrap>
        Email
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        {`ptss0129@gmail.com`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`</`}
      </Typography>
      <Typography variant="body-r" color="green-bold" noWrap>
        Email
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line8
