import { Box, Button, Typography } from '@components/Atom';
import { CircularProgress } from '@components/Atom/CircularProgress';
import useScreenSize from '@hooks/useScreenSize';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import { dashboardTemplateConstant } from 'src/templates/Dashboard/constant';
import { DailyTaskSummaryProps } from 'src/templates/Dashboard/type';

export default function DailyTaskSummary({ onClickViewAll }: DailyTaskSummaryProps) {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { getCompletedPercent } = useProject();
  const summary = getCompletedPercent();

  return (
    <Box
      display="flex"
      p={isMobile ? Setting.DIGIT_16 : Setting.DIGIT_24}
      gap={Setting.DIGIT_8}
      borderRadius={'20px'}
      backgroundColor={'#3742fa'}
      alignItems="center"
      justifyContent="space-between"
      width={'100%'}
    >
      <Box
        display="flex"
        flexDirection="column"
        gap={isMobile ? Setting.DIGIT_24 : Setting.DIGIT_32}
        width="100%"
      >
        <Typography color="#ffffff" fontWeight="semibold" fontSize="xl">
          {dashboardTemplateConstant.taskSummary}
        </Typography>
        <Button roundness="pill" color="danger" onClick={onClickViewAll}>
          {dashboardTemplateConstant.viewProject}
        </Button>
      </Box>
      <CircularProgress color="light" percentage={Number(summary.toFixed(0))} />
    </Box>
  );
}
