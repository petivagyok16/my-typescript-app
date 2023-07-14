import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import Layout from './ui-components/layout/layout';
import ProductsScreen from './screens/products/products-screen';

const App: React.FunctionComponent = () => {

  const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
      { path: '/', element: <ProductsScreen />},
    ]},
  ])

  return <RouterProvider router={router}/>;
}

export default App;
