import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import ErrorPage from '../pages/errorpage/ErrorPage';
import Events from '../pages/events/Events';
import Home from '../pages/home/Home';
import News from '../pages/news/News';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'events', element: <Events /> },
      { path: 'news', element: <News /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
]);

export default router;
