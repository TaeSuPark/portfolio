import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

// Typo -> Typo2
const Line1 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="purple" pr={8} noWrap>
        import
      </Typography>
      <Typography variant="body-r" color="lemon-bold" pr={8} noWrap>
        {`{`}
      </Typography>
      <Typography variant="body-r" color="sky" pr={8} noWrap>
        {`HostName,`}
      </Typography>
      <Typography variant="body-r" color="sky" pr={8} noWrap>
        {`Tel,`}
      </Typography>
      <Typography variant="body-r" color="sky" pr={8} noWrap>
        {`Email,`}
      </Typography>
      <Typography variant="body-r" color="sky" pr={8} noWrap>
        {`Education,`}
      </Typography>
      <Typography variant="body-r" color="sky" pr={8} noWrap>
        {`Certificate`}
      </Typography>
      <Typography variant="body-r" color="lemon-bold" pr={8} noWrap>
        {`}`}
      </Typography>
      <Typography variant="body-r" color="purple" pr={8} noWrap>
        {`from`}
      </Typography>
      <Typography variant="body-r" color="brown" noWrap>
        {`"@basic"`}
      </Typography>
    </HStack>
  )
}
export default Line1
