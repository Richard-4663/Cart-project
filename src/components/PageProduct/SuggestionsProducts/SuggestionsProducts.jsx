import {produtos} from '../../../data/products.js'
import {useNavigate} from 'react-router'

//importando estilos
import './SuggestionsProducts.css'
import { div } from 'three/tsl';

export default function SuggestionProducts({produto}){

    const sugestoes = produtos.filter(item => item.subcategoria === produto.subcategoria)
    const navigate = useNavigate();

    function seeProduct(produto){
        const query = new URLSearchParams()
        query.set('id', produto.id)
        navigate(`/product?${query.toString()}`)
    }

    return(
        <div className='suggestion'>
            <div className='d-flex align-items-center p-2 mb-3 ofertas-dia'>
                <h3>Você também pode gostar</h3>
            </div>
            <div className="items">
                {sugestoes.length > 0 ? sugestoes.map(produto => 
                    <div onClick={() => seeProduct(produto)} key={produto.id} className="item-card" data-category="eletronicos">
                        <div className="product-image">
                            <img className='product-image' src={produto.imagem[0]} width={200} height={180} alt="" />
                        </div>

                        <p className="product-name">{produto.nome}</p>

                        <div className="product-price">R$ {produto.preco.toFixed(2)}</div>
                        <div className='d-flex flex-wrap align-items-center'>
                            <i className="fa-solid fa-boxes-stacked me-2"></i>
                            <h6 className={`stock-count ${produto.qntEstoque > 0 ? 'text-success': 'text-danger'}`}>
                                {produto.qntEstoque > 0 ? 'Em estoque' : 'Produto indisponível'}
                            </h6>
                        </div>
                    </div>
                ): (
                    <div className='text-secondary ms-5' style={{width: 300}}>
                        <h5>Não há produtos para serem exibidos</h5>
                    </div>
                )}

            </div>
        </div>
    )
}
