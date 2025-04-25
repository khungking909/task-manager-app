import { Box, Dialog } from '@components/Atom';
import { Task } from '@components/Molecules/Task';
import useModal from '@hooks/useModal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProject } from 'src/app/zustand/projects/project.selector';
import { Task as TaskType } from 'src/app/zustand/projects/type';
import { useToast } from 'src/app/zustand/toast/toast.selector';
import EditTaskPopup from 'src/templates/Task/EditTaskPopup';
import { TaskListProps } from 'src/templates/Task/type';

export default function TaskList({ taskList }: TaskListProps) {
  const {
    isOpen: isOpenEditTaskPopup,
    openModal: openEditTaskPopup,
    closeModal: closeEditTaskPopup,
  } = useModal();
  const [selectTaskToEdit, setSelectTaskToEdit] = useState<TaskType>({} as TaskType);
  const params = useParams<{ id: string }>();
  const projectId = params.id || '';
  const { removeTask } = useProject();
  const { showToast } = useToast();

  const handleClickOpenEditTaskPopup = (task: TaskType) => {
    openEditTaskPopup();
    setSelectTaskToEdit(task);
  };

  const handleClickRemoveTask = (task: TaskType) => {
    removeTask(projectId, task.id);

    showToast({
      position: 'top-right',
      type: 'success',
      title: 'Success',
      message: 'Task removed successfully',
      duration: 3000,
    });
  };

  return (
    <Box display="flex" flexDirection="column" gap={16} width="100%">
      {taskList.map((item) => (
        <Task
          key={item.id}
          name={item.name}
          description={item.description}
          status={item.status}
          onClickEdit={() => handleClickOpenEditTaskPopup(item)}
          onClickDelete={() => handleClickRemoveTask(item)}
        />
      ))}
      <Dialog open={isOpenEditTaskPopup} onCloseDialog={closeEditTaskPopup} type="center">
        <EditTaskPopup onClose={closeEditTaskPopup} task={selectTaskToEdit} projectId={projectId} />
      </Dialog>
    </Box>
  );
}
