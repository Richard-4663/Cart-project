// main.jsx
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

// Componente Wrapper para envolver todas as rotas com os Providers
const Root = () => (
  <MeuProvider>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </MeuProvider>
)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: '/product',
    element: (
      <MeuProvider>
        <CartContextProvider>
          <ProductPage />
        </CartContextProvider>
      </MeuProvider>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/ofertas',
    element: (
      <MeuProvider>
        <CartContextProvider>
          <OfertasDia />
        </CartContextProvider>
      </MeuProvider>
    )
  },
  {
    path: '/cart',
    element: (
      <MeuProvider>
        <CartContextProvider>
          <Cart />
        </CartContextProvider>
      </MeuProvider>
    )
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)