/* eslint-disable @cspell/spellchecker */
/* eslint-disable sonarjs/no-duplicate-string */
import { ProjectResponse } from 'src/app/zustand/projects/type';

export const initialProjects: ProjectResponse[] = [
  {
    id: 'project-1',
    name: 'Website Redesign',
    description: 'Redesign the landing page and improve UX.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tasks: [
      {
        id: 'task-1',
        name: 'Wireframe new layout',
        description: 'Create wireframe for new home page.',
        status: 'in-progress',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-2',
        name: 'Update color palette',
        description: 'Choose a modern, accessible color scheme.',
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-5',
        name: 'Prototype interaction',
        description: 'Build interactive prototype using Figma.',
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-6',
        name: 'User testing',
        description: 'Conduct usability tests with 5 users.',
        status: 'in-progress',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-7',
        name: 'Implement responsive layout',
        description: 'Ensure layout works across all screen sizes.',
        status: 'done',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  },
  {
    id: 'project-2',
    name: 'Marketing Campaign',
    description: 'Plan and execute new product launch campaign.',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    tasks: [
      {
        id: 'task-3',
        name: 'Write press release',
        description: 'Draft press release for product launch.',
        status: 'done',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-4',
        name: 'Design email template',
        description: 'Create responsive email design.',
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-8',
        name: 'Social media plan',
        description: 'Outline posts for Twitter, LinkedIn, and Facebook.',
        status: 'in-progress',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-9',
        name: 'Create video teaser',
        description: 'Produce a short teaser video for YouTube.',
        status: 'todo',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      {
        id: 'task-10',
        name: 'Launch day checklist',
        description: 'Prepare all tasks for launch day rollout.',
        status: 'done',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  },
];
