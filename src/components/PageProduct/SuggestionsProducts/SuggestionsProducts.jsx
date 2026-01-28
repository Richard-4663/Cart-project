import {produtos} from '../../../data/products.js'
import {ofertasDoDia} from '../../../data/offersDay.js'
import {useNavigate} from 'react-router'

//importando estilos
import './SuggestionsProducts.css'

export default function SuggestionProducts({produto}){

    const sugestoesTotal = produtos.filter(item => item.subcategoria === produto.subcategoria).filter(item => item.id !== produto.id)
    const sugestoesPromo = ofertasDoDia.filter(item => item.subcategoria === produto.subcategoria).filter(item => item.id !== produto.id)
    sugestoesTotal.push(...sugestoesPromo)

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
                {sugestoesTotal.length > 0 ? sugestoesTotal.map(produto => 
                    <div onClick={() => seeProduct(produto)} key={produto.id} className="item-card" data-category="eletronicos">
                        <div className="product-image">
                            <img className='product-image' src={produto.imagem[0]} width={200} height={180} alt="" />
                        </div>

                        <p className="product-name">{produto.nome}</p>

                        <div className="product-price">R$ {produto.preco.toFixed(2)}</div>
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
