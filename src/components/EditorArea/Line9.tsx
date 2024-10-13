import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

const Line9 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="grey-hide" pl={60} noWrap>
        {`<`}
      </Typography>
      <Typography variant="body-r" color="green-bold" pr={8} noWrap>
        {`Education`}
      </Typography>
      <Typography variant="body-r" color="sky" noWrap>
        {`major`}
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        =
      </Typography>
      <Typography variant="body-r" color="blue-main" noWrap>
        {`{`}
      </Typography>
      <Typography variant="body-r" color="brown" noWrap>
        {`"컴퓨터공학전공"`}
      </Typography>
      <Typography variant="body-r" color="blue-main" noWrap>
        {`}`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
      <Typography variant="body-r" color="white-light" noWrap>
        {`동국대학교(서울)`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`</`}
      </Typography>
      <Typography variant="body-r" color="green-bold" noWrap>
        {`Education`}
      </Typography>
      <Typography variant="body-r" color="grey-hide" noWrap>
        {`>`}
      </Typography>
    </HStack>
  )
}
export default Line9
