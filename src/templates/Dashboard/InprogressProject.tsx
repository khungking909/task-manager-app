import { Box, Typography } from '@components/Atom';
import { TaskProgress } from '@components/Molecules/TaskProgress';
import { Carousel } from '@components/Organism';
import useScreenSize from '@hooks/useScreenSize';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { getIsMobile } from 'src/common/untils/isMobile';
import { dashboardTemplateConstant } from 'src/templates/Dashboard/constant';

export default function InprogressProject() {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { getInProgressTasks } = useProject();
  const inProgressTask = getInProgressTasks();

  return (
    <>
      {inProgressTask.length > 0 && (
        <Box display="flex" flexDirection="column" gap={isMobile ? 16 : 24} width="100%">
          <Typography variant="h5" fontWeight="bold">
            {dashboardTemplateConstant.inProgress}
          </Typography>

          <Carousel slidesPerView={'auto'} spaceBetween={isMobile ? 12 : 16}>
            {inProgressTask.map((item) => (
              <Box key={item.id} maxWidth={isMobile ? 250 : 420}>
                <TaskProgress name={item.name} description={item.description} />
              </Box>
            ))}
          </Carousel>
        </Box>
      )}
    </>
  );
}
