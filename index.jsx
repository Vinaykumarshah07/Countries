import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Countrydetail from './components/Countrydetail';
import Contact from './components/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/:country', element: <Countrydetail /> },
      { path: 'contact', element: <Contact /> },
    ],
  },
]);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<RouterProvider router={router} />);