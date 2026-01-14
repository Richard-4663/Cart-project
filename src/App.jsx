// importando métodos de estilos (arquivos .css e bootstrap)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'

// importando componentes
import Header from './components/ComponentsHome/Header/Header.jsx'
import Products from './components/ComponentsHome/Products/Products.jsx'
import Carrossel from './components/ComponentsHome/Carrossel/Carrossel.jsx'
import Footer from './components/ComponentsHome/Footer/Footer.jsx'
import Category from './components/ComponentsHome/Category/Category.jsx'

// importando dados e funções
import {produtos} from './data/products.js'
import {ofertasDoDia} from './data/offersDay.js'



function App() {

  // const cartFunctions = useCart();
  
  return (
    <>
    <Header />  
    <Carrossel img1={'/assets/imgCarrosel/img1.png'} img2={'/assets/imgCarrosel/img2.png'} img3={'/assets/imgCarrosel/img3.png'} img4={'/assets/imgCarrosel/img4.png'} img5={'/assets/imgCarrosel/img5.png'} img6={'/assets/imgCarrosel/img6.png'} img7={'/assets/imgCarrosel/img7.png'}/>
    <div className="wrapper"> 
      <Products produtos={produtos} ofertasDia={ofertasDoDia}/>
      <Category />
    </div>
      <Footer />
    </>
    
  )
}

export default App