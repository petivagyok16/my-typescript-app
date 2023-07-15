import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './App.css';

import Layout from './ui-components/layout/layout';
import ProductsScreen from './screens/products/products-screen';
import NewProductScreen from './screens/new-product/new-product-screen';

const App: React.FunctionComponent = () => {

  const router = createBrowserRouter([
    { path: '/', element: <Layout />, children: [
      { path: '/', element: <ProductsScreen />},
      { path: '/new-product', element: <NewProductScreen />}
    ]},
  ])

  return <RouterProvider router={router}/>;
}

export default App;
