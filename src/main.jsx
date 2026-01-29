// main.jsx - MODIFICADO
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// Importando Providers
import { CartContextProvider } from './context/CartContext.jsx'
import { MeuProvider } from './context/ContextProduct.jsx'

// Importando Páginas
import App from './App.jsx'
import ProductPage from './pages/ProductPage/ProductPage.jsx'
import Login from './pages/Login/Login.jsx'
import OfertasDia from './pages/OfertasDia/OfertasDia.jsx'
import Cart from './pages/Cart/Cart.jsx'

// Importe Toastify AQUI no main.jsx
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  },
  {
    path: '/cart',
    element: <Cart />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeuProvider>
      <CartContextProvider>
        {/* ToastContainer deve estar AQUI, envolvendo tudo */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          theme="light"
        />
        <RouterProvider router={router} />
      </CartContextProvider>
    </MeuProvider>
  </StrictMode>,
)