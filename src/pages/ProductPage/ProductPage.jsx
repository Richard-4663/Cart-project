//importando dependencias
import { useSearchParams } from 'react-router';
import { useEffect } from 'react';

//importando dados
import {produtos} from '../../data/products.js'
import { ofertasDoDia } from '../../data/offersDay.js';

// importando funções
import useWindowWidth from "../../hooks/useWindowWidth.js"

// impotando estilos
import './ProductPage.css'

//importando Componentes
import Header from '../../components/Layout/Header/Header.jsx'
import PriceSection from '../../components/PageProduct/PriceSection/PriceSection.jsx';
import ImgProductSection from '../../components/PageProduct/ImgProductSection/ImgProductSection.jsx';
import DescriptionProductSection from '../../components/PageProduct/DescriptionProductSection/DescriptionProductSection.jsx';
import Footer from '../../components/Layout/Footer/Footer.jsx'
import FullDescription from '../../components/PageProduct/FullDescription/FullDescription.jsx';
import SuggestionProducts from '../../components/PageProduct/SuggestionsProducts/SuggestionsProducts.jsx';

export default function ProductPage(){

    const largura = useWindowWidth();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const produto = produtos.find(produto => produto.id == id) ||  ofertasDoDia.find(produto => produto.id == id)

    useEffect(() => {
        // Rolagem para o topo ao montar o componente
        window.scrollTo(0, 0);  

    }, [])

    return(
      
      <>
        <Header />
          <div className="d-flex justify-content-center align-items-center mt-4">
                <div className={`details p-4 bg-light w-75 rounded-3" ${largura < 668 && 'w-100'}`}>
                  
                  <ImgProductSection produto={produto} />
                  <DescriptionProductSection produto={produto}/>
                  <PriceSection produto={produto} />
                  <FullDescription produto={produto}/>
                  <SuggestionProducts produto={produto}/>
                </div>
          </div>
        <Footer />
      </>
    )
}