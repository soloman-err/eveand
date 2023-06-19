import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import ErrorPage from '../pages/errorpage/ErrorPage';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ path: '/', element: <Home /> }],
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
]);

export default router;
