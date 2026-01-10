//importando dependencias
import { useSearchParams } from 'react-router';

//importando dados
import {produtos} from '../../data/products.js'

// importando funções
import useWindowWidth from "../../hooks/useWindowWidth.js"

// impotando estilos
import './ProductPage.css'

//importando Componentes
import Header from '../../components/ComponentsHome/Header/Header.jsx'
import PriceSection from '../../components/ComponentsPageProducts/PriceSection/PriceSection.jsx';
import ImgProductSection from '../../components/ComponentsPageProducts/ImgProductSection/ImgProductSection.jsx';
import DescriptionProductSection from '../../components/ComponentsPageProducts/DescriptionProductSection/DescriptionProductSection.jsx';
import Footer from '../../components/ComponentsHome/Footer/Footer.jsx'

export default function ProductPage(){

    const largura = useWindowWidth();
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id")
    const produto = produtos.find(produto => produto.id == id) 

    return(
      <>
        <Header />
          <div className="d-flex justify-content-center align-items-center mt-4">
                <div className={`details p-4 bg-light w-75 rounded-3" ${largura < 668 && 'w-100'}`}>
                  
                  <ImgProductSection produto={produto} />
                  <DescriptionProductSection produto={produto}/>
                  <PriceSection produto={produto} />

                </div>
        </div>
        <Footer />
      </>
    )
}