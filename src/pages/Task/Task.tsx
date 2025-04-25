import { Box, Button, Dialog, Typography } from '@components/Atom';
import useModal from '@hooks/useModal';
import useScreenSize from '@hooks/useScreenSize';
import { taskConstant } from '@pages/Task/constant';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { getIsMobile } from 'src/common/untils/isMobile';
import { Setting } from 'src/constants/setting';
import AddTaskPopup from 'src/templates/Task/AddTaskPopup';
import Filter from 'src/templates/Task/Filter';
import TaskList from 'src/templates/Task/TaskList';

export default function Task() {
  const responsive = useScreenSize();
  const isMobile = getIsMobile(responsive);
  const { getTasksByStatus, getProjectById } = useProject();
  const params = useParams<{ id: string }>();
  const [filter, setFilter] = useState<string>('all');
  const tasks = getTasksByStatus(filter, params.id || '');
  const project = getProjectById(params.id || '');
  const {
    isOpen: isOpenAddTaskPopup,
    openModal: openAddTaskPopup,
    closeModal: closeAddTaskPopup,
  } = useModal();

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
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
        gap={isMobile ? 16 : 24}
      >
        <Typography variant="h5" textAlign="center">
          {project?.name}
        </Typography>
        <Button outline color="info" fullWidth={isMobile} onClick={openAddTaskPopup}>
          {taskConstant.addNewTaskButton}
        </Button>
      </Box>
      <Filter onFilterChange={(filter) => setFilter(filter)} />
      <TaskList taskList={tasks} />
      {project && (
        <Dialog open={isOpenAddTaskPopup} onCloseDialog={closeAddTaskPopup} type="center">
          <AddTaskPopup projectId={project.id} onClose={closeAddTaskPopup} />
        </Dialog>
      )}
    </Box>
  );
}
