import HStack from "../HStack/HStack"
import Typography from "../Typography/Typograpy"
import { BlinkingCursor } from "./styled"
import VStack from "../VStack/VStack"

const Line15 = () => {
  return (
    <HStack>
      <Typography variant="body-r" color="purple" pr={8} noWrap>
        {`export`}
      </Typography>
      <Typography variant="body-r" color="purple" pr={8} noWrap>
        {`default`}
      </Typography>
      <Typography variant="body-r" color="lemon-light" noWrap>
        {`Introduction`}
      </Typography>
      <BlinkingCursor>
        <Typography variant="body-r" color="grey-400" noWrap>
          {`|`}
        </Typography>
      </BlinkingCursor>
    </HStack>
  )
}
export default Line15
