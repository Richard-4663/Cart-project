import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

//importando Páginas
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import App from './App.jsx'
import Login from './pages/Login/Login.jsx';
import OfertasDia from './pages/OfertasDia/OfertasDia.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/product',
    element: <ProductPage />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/ofertas',
    element: <OfertasDia />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
