import './Cart.css'
import SummaryCart from '../SummaryCart/SummaryCart.jsx'

export default function Cart({ itemsCart, onClick, increment, decrement }) {
  
  return (
    <div className="cart-section p-4 text-start rounded-3">
      <h2 className="section-title">Meu Carrinho</h2>
      <hr />

      <div className="cart-items">
        {itemsCart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-item-name">
                <i className="fas fa-mobile-alt"></i> {item.nome}
              </div>

              <div className="cart-item-price">
                R$ {item.preco.toFixed(2)}
              </div>
            </div>

            <div className="cart-item-quantity">
              <button className="quantity-btn decrease" onClick={() => decrement(item.id)}>
                <i className="fas fa-minus"></i>
              </button>

              <span className="quantity">{item.quantidadeCarrinho}</span>

              <button className="quantity-btn increase" onClick={() => increment(item.id)}>
                <i className="fas fa-plus"></i>
              </button>

              <button className="btn-remove" onClick={() => onClick(item.id)}>
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <SummaryCart productsCart={itemsCart} />

    </div>
  )
}
