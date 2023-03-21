import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './Componentes/Login';
import Producto from './Componentes/Producto';
import Inicio from './Componentes/Inicio';
import Carrousel from './Componentes/Carrousel';

const browserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Inicio></Inicio>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/producto',
    element: <Producto></Producto>
  },
  {
    path: '/carrousel',
    element: <Carrousel></Carrousel>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={browserRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
