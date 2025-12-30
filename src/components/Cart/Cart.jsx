import './Cart.css'

export default function Cart({ itemCart = [] }) {
  return (
    <div className="cart-section p-4 text-start rounded-3">
      <h2 className="section-title">Meu Carrinho</h2>
      <hr />

      <div className="cart-items">
        {itemCart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-item-name">
                <i className="fas fa-mobile-alt"></i> {item.nome}
              </div>

              <div className="cart-item-price">
                R$ {item.preco}
              </div>
            </div>

            <div className="cart-item-quantity">
              <button className="quantity-btn decrease">
                <i className="fas fa-minus"></i>
              </button>

              <span className="quantity">{item.quantidadeCarrinho}</span>

              <button className="quantity-btn increase">
                <i className="fas fa-plus"></i>
              </button>

              <button className="btn-remove">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-total">
        <div className="total-line">
          <span id="qtn-itens">
            <i className="fas fa-shopping-basket">Subtotal: (0 itens):</i>
          </span>
          <span id="subtotal">R$ 0,00</span>
        </div>

        <div className="total-line">
          <span id="textDiscount"> Desconto (0%):</span>
          <span id="discount" style={{ color: '#28a745' }}>R$ 0,00</span>
        </div>

        <div className="total-line">
          <span>
            <i className="fas fa-truck" style={{ color: '#007bff' }}></i> Frete:
          </span>
          <span id="shipping" style={{ color: '#28a745' }}>incluso</span>
        </div>

        <div className="total-line total-final">
          <span>
            <i className="fas fa-receipt"></i> Total:
          </span>
          <span id="total">10.000,00</span>
        </div>

        <button className="btn-checkout">Finalizar</button>
      </div>
    </div>
  )
}
