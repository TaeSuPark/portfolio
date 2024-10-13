import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

const Line10 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="grey-hide" pl={60} noWrap>
        {`<`}
      </Typography>
      <Typography variant="body-r" color="green-bold" pr={8} noWrap>
        {`Certificate`}
      </Typography>
      <Typography variant="body-r" color="sky" noWrap>
        {`when`}
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        =
      </Typography>
      <Typography variant="body-r" color="blue-main" noWrap>
        {`{`}
      </Typography>
      <Typography variant="body-r" color="brown" noWrap>
        {`"22.06.17"`}
      </Typography>
      <Typography variant="body-r" color="blue-main" noWrap>
        {`}`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        {`정보처리기사`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`</`}
      </Typography>
      <Typography variant="body-r" color="green-bold" noWrap>
        {`Certificate`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line10
