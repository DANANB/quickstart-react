import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../features/layout';
import { Home } from '../features/home';
import { Error } from '../features/error';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);

export default router;
