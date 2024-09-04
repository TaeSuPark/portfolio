import { Typography } from "@mui/material"
import Card from "../Card/Card"
import HStack from "../HStack/HStack"
import VStack from "../VStack/VStack"
import Tag from "../Tag/Tag"
import { OverflowHStack, VHStack } from "./styled"

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
  svg: FirstSvg,
  title,
  period,
  member,
  task,
  onClick,
  onDetail,
}: Props) => {
  return (
    <Card onClick={onDetail}>
      <HStack gap="24px" minWidth="55vw">
        <VStack justifyContent="space-between" width="100%" gap="24px">
          <VStack gap="12px">
            <Typography variant="h6" color="#DCDCDC">
              {title}
            </Typography>
            <VHStack>
              <Typography variant="subtitle1" color="#DCDCDC" flexGrow={1}>
                {`기간`}
              </Typography>
              <Typography variant="subtitle1" color="#DCDCDC">
                {period}
              </Typography>
            </VHStack>
            <VHStack>
              <Typography variant="subtitle1" color="#DCDCDC" flexGrow={1}>
                {`인원`}
              </Typography>
              <Typography variant="subtitle1" color="#DCDCDC">
                {member}
              </Typography>
            </VHStack>
            <VHStack gap="8px">
              <Typography variant="subtitle1" color="#DCDCDC" flexGrow={1}>
                {`업무`}
              </Typography>
              <OverflowHStack gap="6px">
                {task.map((v, idx) => (
                  <Tag title={v.name} color={v.color} key={idx} />
                ))}
              </OverflowHStack>
            </VHStack>
          </VStack>
          <Typography
            variant="subtitle2"
            color="#DCDCDC"
            textAlign={"right"}
            style={{ cursor: "pointer" }}
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
