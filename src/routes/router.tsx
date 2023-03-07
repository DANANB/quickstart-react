import { createBrowserRouter } from 'react-router-dom';

import { Layout, Error, Home } from 'features';

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
