// importando componentes
import Header from '../../components/Layout/Header/Header.jsx'
import Footer from '../../components/Layout/Footer/Footer.jsx'
import Category from '../../components/UI/Category/Category.jsx'
import ProductOffersPage from '../../components/Products/ProductOffertsPage/ProductOffertsPage.jsx'

// importando dados e funções
import {ofertasDoDia} from '../../data/offersDay.js'

//importando hooks
import { useEffect } from 'react'

export default function OfertasDia() {
    useEffect(() => {
        // Rolagem para o topo ao montar o componente
        window.scrollTo(0, 0);  

    }, [])

  return (
      <>
        <Header />
        <div className="wrapper">
          <Category />
          <div className="content-sections">
  
            <section className="offers-section">
              <h2 className="section-title">🔥 Ofertas do dia</h2>
              <ProductOffersPage produtosOferta={ofertasDoDia} />
            </section>
  
          </div>
        </div>
        <Footer />
      </>
    )
}
