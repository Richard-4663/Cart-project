import './ItemCart.css'

//importando componentes
import Header from '../../Layout/Header/Header.jsx'
import Footer from  '../../Layout/Footer/Footer.jsx'
import SummaryCart from '../SummaryCart/SummaryCart.jsx'

//importando hooks
import { useCart } from '../../../context/CartContext.jsx'

export default function ItemCart() {
  
  // CORREÇÃO: Chame useCart() UMA VEZ no início do componente
  const { 
    produtosCarrinho, 
    decrementQuantity, 
    incrementQuantity, 
    removeItemCart 
  } = useCart();
  
  // Verificação de carrinho vazio
  if (produtosCarrinho.length === 0) {
    return (
      <>
        <Header />
        <div className='container-geral'>
          <h2 className="section-title">Meu Carrinho</h2>
          <div className="cart-section p-4 text-center rounded-3">
            <h4>Seu carrinho está vazio</h4>
            <p>Adicione produtos para vê-los aqui</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      
      <div className='container-geral'>
        <h2 className="section-title">Meu Carrinho</h2>

        <div className="cart-section p-4 text-start rounded-3 ">
          <div className="cart-items">
            {produtosCarrinho.map(item => (
              <div key={item.id} className="cart-item">
                <div>
                  <img src={item.imagem[0]} width={100} alt={item.nome} />
                </div>
                <div className="cart-item-info">
                  <div className="cart-item-name">
                    {item.nome}
                  </div>

                  <div className="cart-item-price fs-4">
                    {item.precoOriginal && (
                      <div>
                        <s className='fs-6'>R$ {item.precoOriginal.toFixed(2)}</s>
                      </div>
                    )}
                    R$ {item.preco.toFixed(2)}
                  </div>
                </div>

                <div className="cart-item-quantity">
                  <div className='btns-quantity d-flex justify-content-center align-items-center gap-2'>
                    <button 
                      className="quantity-btn decrease" 
                      onClick={() => decrementQuantity(item.id)}
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    
                    <span className="quantity">{item.quantidadeCarrinho}</span>
                    
                    <button 
                      className="quantity-btn increase" 
                      onClick={() => incrementQuantity(item.id)}
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  <button 
                    className="btn-remove" 
                    onClick={() => removeItemCart(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <SummaryCart productsCart={produtosCarrinho} />
        </div>
      </div>
      <Footer />
    </>
  )
}