import { BaseDataTimestamp } from 'src/types';

export interface ProjectStore {
  projects: ProjectResponse[];
  setProjects: (projects: ProjectResponse[]) => void;
  addProject: (project: ProjectResponse) => void;
  removeProject: (projectId: string) => void;
  addTask: (projectId: string, task: Task) => void;
  updateTask: (projectId: string, taskId: string, updatedTask: Partial<Task>) => void;
  removeTask: (projectId: string, taskId: string) => void;
}

export interface ProjectResponse extends BaseDataTimestamp {
  id: string;
  name: string;
  description?: string;
  tasks: Task[];
}

export interface Task extends BaseDataTimestamp {
  id: string;
  name: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
}
