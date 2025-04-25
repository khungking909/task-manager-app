// eslint-disable-next-line @cspell/spellchecker
/* eslint-disable sonarjs/no-duplicate-string */
import { initialProjects } from 'src/app/zustand/projects/initialState';
import { ProjectResponse, ProjectStore, Task } from 'src/app/zustand/projects/type';
import { useToast } from 'src/app/zustand/toast/toast.selector';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useProjectStore = create<ProjectStore>()(
  persist<ProjectStore>(
    (set) => ({
      projects: initialProjects,
      setProjects: (projects: ProjectResponse[]) => {
        set({ projects });
      },
      addProject: (project: ProjectResponse) => {
        set((state) => ({ projects: [...state.projects, project] }));
      },
      removeProject: (projectID: string) => {
        set((state) => ({ projects: state.projects.filter((item) => item.id != projectID) }));
      },
      addTask: (projectID: string, task: Task) => {
        set((state) => {
          const projectExists = state.projects.some((project) => project.id === projectID);

          if (!projectExists) {
            const { showToast } = useToast();

            showToast({
              position: 'top-right',
              type: 'error',
              title: 'Error',
              message: 'Project not found',
              duration: 3000,
            });

            return state;
          }

          return {
            projects: state.projects.map((project) =>
              project.id === projectID ? { ...project, tasks: [...project.tasks, task] } : project,
            ),
          };
        });
      },
      updateTask: (projectID: string, taskID: string, updatedTask: Partial<Task>) => {
        set((state) => {
          const projectExists = state.projects.some((project) => project.id === projectID);

          if (!projectExists) {
            const { showToast } = useToast();

            showToast({
              position: 'top-right',
              type: 'error',
              title: 'Error',
              message: 'Project not found',
              duration: 3000,
            });

            return state;
          }

          return {
            projects: state.projects.map((project) =>
              project.id === projectID
                ? {
                    ...project,
                    tasks: project.tasks.map((task) =>
                      task.id === taskID ? { ...task, ...updatedTask } : task,
                    ),
                  }
                : project,
            ),
          };
        });
      },
      removeTask: (projectID: string, taskID: string) => {
        set((state) => {
          const projectExists = state.projects.some((project) => project.id === projectID);

          if (!projectExists) {
            const { showToast } = useToast();

            showToast({
              position: 'top-right',
              type: 'error',
              title: 'Error',
              message: 'Project not found',
              duration: 3000,
            });

            return state;
          }

          return {
            projects: state.projects.map((project) =>
              project.id === projectID
                ? {
                    ...project,
                    tasks: project.tasks.filter((task) => task.id !== taskID),
                  }
                : project,
            ),
          };
        });
      },
    }),
    {
      name: 'task-manager',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
