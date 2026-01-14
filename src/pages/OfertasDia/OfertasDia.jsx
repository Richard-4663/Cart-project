// importando componentes
import Header from '../../components/ComponentsHome/Header/Header.jsx'
import Carrossel from '../../components/ComponentsHome/Carrossel/Carrossel.jsx'
import Footer from '../../components/ComponentsHome/Footer/Footer.jsx'
import Category from '../../components/ComponentsHome/Category/Category.jsx'
import ProductsOffers from '../../components/ComponentsOffers/ProductOfferts/ProductOffers.jsx'

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
    {/* <Carrossel img1={'/assets/imgCarrosel/img1.png'} img2={'/assets/imgCarrosel/img2.png'} img3={'/assets/imgCarrosel/img3.png'} img4={'/assets/imgCarrosel/img4.png'} img5={'/assets/imgCarrosel/img5.png'} img6={'/assets/imgCarrosel/img6.png'} img7={'/assets/imgCarrosel/img7.png'}/> */}
    <div className="wrapper"> 
      <ProductsOffers produtosOfertas={ofertasDoDia}/>
      <Category />
    </div>
      <Footer />
    </>
    
  )
}
