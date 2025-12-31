import { useNavigate } from 'react-router'
import Button from '../Button/Button.jsx'
import './produtos.css'

export default function Products({produtos}){

    const navigate = useNavigate()
    
    function seeProduct(produto){

        const query = new URLSearchParams()
        query.set('nome', produto.nome)
        query.set('preco', produto.preco)
        query.set('categoria', produto.categoria)
        query.set('estoque', produto.qntEstoque)

        navigate(`/product?${query.toString()}`)
    }

    return(
        <div className="products p-4 text-start rounded-3">
            <h2>Produtos disponiveis</h2>
            <hr className="bg-purple"/>
            <div className="Btns d-flex gap-4 flex-wrap">
                <Button text={'Todos'} />
                <Button text={'Eletronicos'}/>
                <Button text={'Roupas'}/>
                <Button text={'Calçados'}/>
                <Button text={'Livros'}/>
                <Button text={'Em estoque'}/>
            </div>

            <div className="items mt-4">{produtos.map(produto => 

                <div key={produto.id} className="item-card" data-category="eletronicos">
                    <div role="button" onClick={() => seeProduct(produto)} className="product-image">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h3 role="button" onClick={() => seeProduct(produto)} className="product-name">{produto.nome}</h3>
                    <div className="product-price">R$ {produto.preco.toFixed(2)}</div>
                    <div className="product-category">
                        <i className="fas fa-tag"></i> {produto.categoria}
                    </div>
                    <div className="product-stock">
                        <i className="fas fa-box"></i> Estoque: <span className="stock-count">{produto.qntEstoque}</span>
                    </div>
                    <br />
                    <button className="btn-add">
                        <i className="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            )}

            </div>
        </div>
        
    )
}