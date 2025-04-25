import { useCallback } from 'react';
import { useProjectStore } from 'src/app/zustand/projects';
import { useShallow } from 'zustand/shallow';

export const useProject = () => {
  const { addProject, addTask, projects, removeProject, setProjects, updateTask, removeTask } =
    useProjectStore(useShallow((state) => state));

  const getProjectById = useCallback(
    (projectId: string) => projects.find((project) => project.id === projectId),
    [projects],
  );

  const getTaskById = useCallback(
    (projectId: string, taskId: string) => {
      const project = getProjectById(projectId);
      return project?.tasks.find((task) => task.id === taskId);
    },
    [getProjectById],
  );

  const getTasksByProjectId = useCallback(
    (projectId: string) => {
      const project = getProjectById(projectId);
      return project?.tasks || [];
    },
    [getProjectById],
  );

  const getTasksByStatus = useCallback(
    (status: string, projectId: string) => {
      const project = getProjectById(projectId);

      if (!project) return [];
      if (status === 'all') return project?.tasks || [];

      return project?.tasks.filter((item) => item.status === status) || [];
    },
    [getProjectById],
  );

  const getCompletedPercent = useCallback(() => {
    const allTasks = projects.flatMap((project) => project.tasks);
    const total = allTasks.length;

    if (total === 0) return 0;

    const done = allTasks.filter((task) => task.status === 'done').length;

    return (done / total) * 100;
  }, [projects]);

  const getCompletedPercentByProjectId = useCallback(
    (projectId: string) => {
      const project = getProjectById(projectId);
      if (!project || project.tasks.length === 0) return 0;

      const total = project.tasks.length;
      const done = project.tasks.filter((task) => task.status === 'done').length;

      return (done / total) * 100;
    },
    [getProjectById],
  );

  const getInProgressTasks = useCallback(() => {
    return projects.flatMap((project) => project.tasks).filter((task) => task.status === 'in-progress');
  }, [projects]);

  return {
    addProject,
    addTask,
    projects,
    removeProject,
    setProjects,
    getProjectById,
    getTaskById,
    getTasksByProjectId,
    getTasksByStatus,
    updateTask,
    removeTask,
    getCompletedPercent,
    getCompletedPercentByProjectId,
    getInProgressTasks,
  };
};
