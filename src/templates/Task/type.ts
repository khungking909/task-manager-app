import { Task } from 'src/app/zustand/projects/type';

export interface AddTaskPopupProps {
  onClose: () => void;
  projectId: string;
}

export interface TaskListProps {
  taskList: Task[];
}

export interface FilterProps {
  onFilterChange: (value: string) => void;
}

export interface EditTaskPopupProps {
  onClose: () => void;
  projectId: string;
  task: Task;
}
