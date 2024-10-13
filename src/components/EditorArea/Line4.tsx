import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"

const Line4 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="purple" pl={20} pr={8} noWrap>
        {`return`}
      </Typography>
      <Typography variant="body-r" color="purple" noWrap>
        {`(`}
      </Typography>
    </HStack>
  )
}
export default Line4
