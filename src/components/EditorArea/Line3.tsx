import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

const Line3 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="blue" pr={8} noWrap>
        const
      </Typography>
      <Typography variant="body-r" color="lemon-light" pr={8} noWrap>
        Introduction
      </Typography>
      <Typography variant="body-r" color="white-light" pr={8} noWrap>
        =
      </Typography>
      <Typography variant="body-r" color="lemon-bold" pr={4} noWrap>
        {`(`}
      </Typography>
      <Typography variant="body-r" color="lemon-bold" pr={8} noWrap>
        {`)`}
      </Typography>
      <Typography variant="body-r" color="blue" pr={8} noWrap>
        {`=>`}
      </Typography>
      <Typography variant="body-r" color="lemon-bold" noWrap>
        {`{`}
      </Typography>
    </HStack>
  )
}
export default Line3
