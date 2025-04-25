import { memo } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from 'src/app/routes/Router';

const AppComponent = () => {
  return <RouterProvider router={router} />;
};

const App = memo(AppComponent);

export default App;
