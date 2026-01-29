import ItemCart from '../../components/Cart/ItemCart/ItemCart.jsx'
import SummaryCart from '../../components/Cart/SummaryCart/SummaryCart.jsx'
import { useCart } from '../../context/CartContext.jsx'
import './Cart.css'

//importando componentes
import Header from '../../components/Layout/Header/Header.jsx'
import Footer from  '../../components/Layout/Footer/Footer.jsx'


export default function Cart(){
    const { produtosCarrinho } = useCart();
    return(
        <>
            <Header />
            <div className='container-geral'>
                <h2 className="section-title">Meu Carrinho</h2>
                <div className="cart-section p-4 text-start rounded-3">
                    <ItemCart />
                    <SummaryCart itemsCart={produtosCarrinho}/>
                </div>
            </div>
            <Footer />
        </>
    )
}