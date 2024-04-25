import { Typography } from "@mui/material"
import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"
import Tag from "../Tag/Tag"

interface Props {
  svg: any
  title: string
  period: string
  member: string
  task: { name: string; color: string }[]
  onClick?: () => void
  onDetail: () => void
}

const ProjectCard = ({
  title,
  period,
  member,
  task,
  onClick,
  onDetail,
}: Props) => {
  return (
    <Card onClick={onClick}>
      <HStack gap="24px" minWidth="55vw">
        <VStack minWidth="300px" height="200px" bg="#123123">
          <></>
        </VStack>
        <VStack justifyContent="space-between" width="100%">
          <VStack gap="12px">
            <Typography variant="h6" color="#DCDCDC">
              {title}
            </Typography>
            <HStack>
              <Typography variant="subtitle1" color="#DCDCDC" flexGrow={1}>
                {`기간`}
              </Typography>
              <Typography variant="subtitle1" color="#DCDCDC">
                {period}
              </Typography>
            </HStack>
            <HStack>
              <Typography variant="subtitle1" color="#DCDCDC" flexGrow={1}>
                {`인원`}
              </Typography>
              <Typography variant="subtitle1" color="#DCDCDC">
                {member}
              </Typography>
            </HStack>
            <HStack>
              <Typography variant="subtitle1" color="#DCDCDC" flexGrow={1}>
                {`업무`}
              </Typography>
              <HStack gap="6px">
                {task.map((v, idx) => (
                  <Tag title={v.name} color={v.color} key={idx} />
                ))}
              </HStack>
            </HStack>
          </VStack>
          <Typography
            variant="subtitle2"
            color="#DCDCDC"
            textAlign={"right"}
            onClick={(e: any) => {
              e.stopPropagation()
              onDetail()
            }}
          >
            {`상세보기`}
          </Typography>
        </VStack>
      </HStack>
    </Card>
  )
}

export default ProjectCard
