import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

const Line6 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="grey-hide" pl={60} noWrap>
        {`<`}
      </Typography>
      <Typography variant="body-r" color="green-bold" pr={8} noWrap>
        HostName
      </Typography>
      <Typography variant="body-r" color="sky" noWrap>
        birth
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        =
      </Typography>
      <Typography variant="body-r" color="blue-main" noWrap>
        {`{`}
      </Typography>
      <Typography variant="body-r" color="brown" noWrap>
        {`95.01.29`}
      </Typography>
      <Typography variant="body-r" color="blue-main" noWrap>
        {`}`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        박태수
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`</`}
      </Typography>
      <Typography variant="body-r" color="green-bold" noWrap>
        HostName
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line6
