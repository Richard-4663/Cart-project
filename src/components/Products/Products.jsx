import Button from '../Button/Button'
import './produtos.css'

export default function Products({produtos}){
    return(
        <div className="products p-4 text-start rounded-3">
            <h2>Produtos disponiveis</h2>
            <hr className="bg-purple"/>
            <div className="Btns d-flex gap-4">
                <Button text={'Todos'} />
                <Button text={'Eletronicos'}/>
                <Button text={'Roupas'}/>
                <Button text={'Calçados'}/>
                <Button text={'Livros'}/>
                <Button text={'Em estoque'}/>
            </div>

            <div className="items mt-4">{produtos.map(produto => 

                <div key={produto.id} className="item-card" data-category="eletronicos">
                    <div className="product-image">
                        <i className="fas fa-mobile-alt"></i>
                    </div>
                    <h3 className="product-name">{produto.nome}</h3>
                    <div className="product-price">R$ {produto.preco}</div>
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