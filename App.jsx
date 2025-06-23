import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';

// Router with layout wrapper
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <h1>404 Not Found</h1> },
      { path: '/menu', element: <Menu /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};


export default App;


