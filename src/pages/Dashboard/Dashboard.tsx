import { Box } from '@components/Atom';
import useScreenSize from '@hooks/useScreenSize';
import { dashboardConstant } from '@pages/Dashboard/constant';
import { useCallback, useRef } from 'react';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import DailyTaskSummary from 'src/templates/Dashboard/DailyTaskSummary';
import DashboardAvatar from 'src/templates/Dashboard/DashboardAvatar';
import InprogressProject from 'src/templates/Dashboard/InprogressProject';
import TaskGroup from 'src/templates/Dashboard/TaskGroup';

export default function Dashboard() {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { projects } = useProject();
  const taskGroupRef = useRef<HTMLDivElement>(null);

  const handleClickViewAll = useCallback(() => {
    const targetElement = taskGroupRef.current;
    if (targetElement) {
      const start = window.pageYOffset;
      const end = targetElement.offsetTop;
      const duration = 1000;
      let startTime: number | null = null;

      const scroll = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollY = start + (end - start) * (progress / duration);

        window.scrollTo(0, scrollY);

        if (progress < duration) {
          window.requestAnimationFrame(scroll);
        } else {
          window.scrollTo(0, end);
        }
      };

      window.requestAnimationFrame(scroll);
    }
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      minWidth={Setting.MIN_WIDTH}
      maxWidth={Setting.MAX_WIDTH}
      p={isMobile ? Setting.DIGIT_16 : Setting.DIGIT_52}
      m={'0 auto'}
      gap={isMobile ? Setting.DIGIT_16 : Setting.DIGIT_24}
    >
      <DashboardAvatar
        name={dashboardConstant.username}
        email={dashboardConstant.description}
        avatar={dashboardConstant.avatar}
      />
      <DailyTaskSummary onClickViewAll={handleClickViewAll} />
      <InprogressProject />
      <TaskGroup projects={projects} ref={taskGroupRef} />
    </Box>
  );
}
