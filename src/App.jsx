// importando métodos de estilos (arquivos .css e bootstrap)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'

// importando componentes da página
import Header from './components/Layout/Header/Header.jsx'
import Footer from './components/Layout/Footer/Footer.jsx'
import Carrossel from './components/Layout/Carrossel/Carrossel.jsx'
import Products from './components/Products/ProductsScrollInfitine/Products.jsx'
import ProductShowCase from './components/Products/ProductShowCase/ProductShowCase.jsx'
import Category from './components/UI/Category/Category.jsx'

// importando componentes para passar os dados
import ItemCart from './components/Cart/ItemCart/ItemCart.jsx'
import ProductsOffers from './components/Products/ProductOffertsPage/ProductOffertsPage.jsx'
import PriceSection from './components/PageProduct/PriceSection/PriceSection.jsx'

// importando hooks para os dados
import { CartContextProvider } from './hooks/CartContext.jsx'
import { MeuProvider } from './hooks/ContextProduct.jsx'
import { ofertasDoDia } from './data/offersDay.js'


function App() {
  return (
      <MeuProvider>
        <CartContextProvider>
        <Header />
        <Carrossel 
          img1={'/assets/imgCarrosel/img1.png'} 
          img2={'/assets/imgCarrosel/img2.png'} 
          img3={'/assets/imgCarrosel/img3.png'} 
          img4={'/assets/imgCarrosel/img4.png'} 
          img5={'/assets/imgCarrosel/img5.png'} 
          img6={'/assets/imgCarrosel/img6.png'} 
          img7={'/assets/imgCarrosel/img7.png'}
        />
        <div className="wrapper">
          <Category />
          
          <div className="content-sections">
            <section className="offers-section">
              <h2 className="section-title">🔥 Ofertas do dia</h2>
              <ProductShowCase produtos={ofertasDoDia} />
            </section>

            <section className="for-you-section">
              <h2 className="section-title">🎁 Para você</h2>
              <Products />
            </section>
          </div>
        </div>

        <Footer />
        <div style={{display: 'none'}}>
          <ItemCart />
          <ProductsOffers />
          <PriceSection />
        </div>
        </CartContextProvider>
      </MeuProvider>
  )
}

export default App