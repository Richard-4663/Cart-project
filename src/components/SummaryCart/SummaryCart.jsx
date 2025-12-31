import { useState } from 'react';
import './SummaryCart.css'

export default function SummaryCart(productsCart){

    return(
        <div className="cart-total">
        <div className="total-line">
          <span id="qtn-itens">
            <i className="fas fa-shopping-basket"></i> Subtotal: (0 itens):
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
    )
}