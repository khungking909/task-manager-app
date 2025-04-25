import { ProjectResponse } from 'src/app/zustand/projects/type';

export interface DashboardAvatarProps {
  name: string;
  email: string;
  avatar: string;
}

export interface DailyTaskSummaryProps {
  onClickViewAll: () => void;
}

export interface TaskGroupProps {
  projects: ProjectResponse[];
}
