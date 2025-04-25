import { Box, Dialog, Typography } from '@components/Atom';
import { Add } from '@components/Atom/Icon/icons/Add';
import { Project } from '@components/Molecules/Project';
import useModal from '@hooks/useModal';
import useScreenSize from '@hooks/useScreenSize';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { getIsMobile } from 'src/common/untils/isMobile';
import AddProjectPopup from 'src/templates/Dashboard/AddProjectPopup';
import { dashboardTemplateConstant } from 'src/templates/Dashboard/constant';
import { TaskGroupProps } from 'src/templates/Dashboard/type';

const TaskGroup = forwardRef<HTMLDivElement, TaskGroupProps>(({ projects = [] }: TaskGroupProps, ref) => {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { getCompletedPercentByProjectId } = useProject();
  const {
    isOpen: isOpenAddProjectPopup,
    openModal: openAddProjectPopup,
    closeModal: closeAddProjectPopup,
  } = useModal();

  return (
    <Box display="flex" flexDirection="column" gap={isMobile ? 16 : 24} width="100%" ref={ref}>
      <Box display="flex" gap={isMobile ? 16 : 24} alignItems="center">
        <Typography variant="h5" fontWeight="bold">
          {dashboardTemplateConstant.taskGroup}
        </Typography>
        <Add
          box
          boxVariant="circle"
          boxSize="large"
          boxColor="success"
          color="light"
          onClick={openAddProjectPopup}
        />
      </Box>
      {projects.map((project) => (
        <Link to={`/task/${project.id}`} key={project.id}>
          <Project
            name={project.name}
            totalTasks={project.tasks.length}
            completedPercent={Number(getCompletedPercentByProjectId(project.id).toFixed())}
          />
        </Link>
      ))}
      <Dialog open={isOpenAddProjectPopup} onCloseDialog={closeAddProjectPopup} type="center">
        <AddProjectPopup closePopup={closeAddProjectPopup} />
      </Dialog>
    </Box>
  );
});

TaskGroup.displayName = 'TaskGroup';

export default TaskGroup;
