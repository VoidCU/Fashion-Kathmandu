import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Homepage/Homepage';
import 'font-awesome/css/font-awesome.min.css';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
