import './SummaryCart.css'

export default function SummaryCart({productsCart}){
  
// 1️⃣ Função
const calcularDiscont = (subtotal) => {
  if (subtotal < 100) return 0
  if (subtotal <= 300) return 10
  return 30
}

// 2️⃣ Subtotal
const subtotal = productsCart?.reduce(
  (acc, produto) => acc + produto.preco,
  0
) || 0

// 3️⃣ Percentual de desconto
const discont = calcularDiscont(subtotal)

// 4️⃣ Valor do desconto (NÚMERO)
const valorDesconto = subtotal * (discont / 100)

// 5️⃣ Total final
const total = subtotal - valorDesconto

// 6️⃣ Formatação
const totalFormatado = total.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

const discontFormated = valorDesconto.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

  
  return(
    <div className="cart-total">
        <div className="total-line">
          <span id="qtn-itens">
            <i className="fas fa-shopping-basket"></i> Subtotal: ({productsCart.length} itens):
          </span>
          <span id="subtotal">R$ 0,00</span>
        </div>

        <div className="total-line">
          <span id="textDiscount"> Desconto ({discont}%):</span>
          <span id="discount" style={{ color: '#28a745' }}>{discontFormated}</span>
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
          <span id="total">{totalFormatado}</span>
        </div>

        <button className="btn-checkout">Finalizar Compra ({productsCart.length} Itens)</button>
      </div>
    )
}