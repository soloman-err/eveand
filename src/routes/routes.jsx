import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
]);

export default router;
