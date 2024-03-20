import { Typography } from "@mui/material"

import VStack from "../components/VStack/VStack"

const Home = () => {
  return (
    <VStack>
      <VStack justifyContent="center" alignItems="center" p="8px 8px 4px 8px">
        <Typography variant="h6" component="div">
          포트폴리오
        </Typography>
      </VStack>

      <VStack p="20px" gap="16px">
        <Typography variant="h3" component="div">
          Developer.
        </Typography>
        <Typography variant="h3" component="div">
          Park.
        </Typography>
        <Typography variant="h3" component="div">
          Taesu.
        </Typography>
      </VStack>
    </VStack>
  )
}

export default Home
