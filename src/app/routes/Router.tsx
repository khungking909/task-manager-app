import { Dashboard } from '@pages/Dashboard';
import { Home } from '@pages/Home';
import Task from '@pages/Task/Task';
import { createBrowserRouter } from 'react-router-dom';
import Layout from 'src/common/Layout';
import { ScreenPath } from 'src/constants/screen';

const router = createBrowserRouter(
  [
    {
      path: ScreenPath.HOME,
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: ScreenPath.DASHBOARD,
          element: <Dashboard />,
        },
        {
          path: ScreenPath.TASK,
          element: <Task />,
        },
      ],
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export default router;
