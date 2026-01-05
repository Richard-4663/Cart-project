// importando métodos de estilos (arquivos .css e bootstrap)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './App.css'

// importando componentes
import Header from './components/Header/Header.jsx'
import Products from './components/Products/Products.jsx'
import Cart from './components/Cart/Cart.jsx'
import Carrossel from './components/Carrossel/Carrossel.jsx'

// importando dados e funções
import {produtos} from './data/products.js'
import useCart from './hooks/useCart.js'

// //importando imagens
// import 


function App() {

  const cartFunctions = useCart();
  
  return (
    <>
    <Header />  
    <Carrossel img1={'/assets/imgCarrosel/img1.png'} img2={'/assets/imgCarrosel/img2.png'} img3={'/assets/imgCarrosel/img3.png'} img4={'/assets/imgCarrosel/img4.png'}/>
      <div className="wrapper"> 
          <div className='content bg-light'>
            <Products produtos={produtos} onClick={cartFunctions.AddItemCart}/>
            <Cart itemsCart={cartFunctions.produtosCarrinho} onClick={cartFunctions.removeItemCart} increment={cartFunctions.incrementQuantity} decrement={cartFunctions.decrementQuantity} />
          </div>
      </div>
    </>
    
  )
}

export default App