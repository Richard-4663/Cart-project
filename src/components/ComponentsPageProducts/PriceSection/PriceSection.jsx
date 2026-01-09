import { useState } from "react"
import './Price-section.css'

export default function PriceSection({produto}){

    const [placeholder, setPlaceholder] = useState("Inserir CEP")

    return(
        <div className='p-3 rounded-3 price-section'>
            <div className="product-price text-white">
                <h1>R$ {Number(produto.preco).toFixed(2)}</h1>
                <p className='fs-6'>À vista no PIX com 10% de desconto</p>
            </div>

            <div className='d-flex mt-3'>
                <button className="btn-add p-3 w-50 rounded-3">
                <i className="fas fa-cart-plus"></i>Comprar Agora
                </button>
                <button className="btn-add p-3 ms-2 w-50 rounded-3">
                <i className="fas fa-cart-plus"></i> Adicionar
                </button>

            </div>

            <div className='mt-4'>
                <h4><i className="fa-solid fa-truck me-2 text-white"></i>Consulte seu frete</h4>
                <form className='d-flex'>
                <input className="form-control w-75 me-3" type="text" onFocus={() => setPlaceholder('_ _ _ _ _ - _ _ _')} onBlur={() => setPlaceholder("Inserir CEP*")} placeholder={placeholder}/>
                <button className="btn-add w-25"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

        </div>
    )
}