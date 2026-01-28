//importando hooks
import { useNavigate } from 'react-router'
import { useState } from 'react'

//importando estilos
import './Products.css'

//importando hooks
import { useCart } from '../../../context/CartContext.jsx'
import { useProdutos } from '../../../context/ContextProduct.jsx'

export default function Products(){

    const { produtos } = useProdutos()
    const cartFunctions = useCart();
    
    const [categoriaAtual, setCategoriaAtual] = useState('todos');
    const [quantidadeVisivelScroolInfinite, setquantidadeVisivelScroolInfinite] = useState(10);
    
    const navigate = useNavigate()

    // Função refatorada para preparar produtos
    const prepararProdutos = (produtos, limitador) => {
        const produtosFiltrados = cartFunctions.filtro(produtos, categoriaAtual);
        const produtosLimitados = produtosFiltrados.slice(0, limitador);
        return { 
            limitados: produtosLimitados, 
            filtrados: produtosFiltrados,
            totalFiltrados: produtosFiltrados.length
        };
    }
    
    // Usando a função para preparar os produtos
    const produtosParaVoce = prepararProdutos(produtos, quantidadeVisivelScroolInfinite);
    
    function seeProduct(produto){
        const query = new URLSearchParams()
        query.set('id', produto.id)
        navigate(`/product?${query.toString()}`)
    }

    return(
        <>
            <div className="products mt-4 text-start rounded-3">

                <div className="items">
                    {produtosParaVoce.limitados.map(produto => 
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
                )}

                </div>

                {quantidadeVisivelScroolInfinite < produtosParaVoce.totalFiltrados && (
                    <div className="text-center mt-4">
                        <button className="btn btn-nav" onClick={() => setquantidadeVisivelScroolInfinite(prev => prev + 10)}>
                            Ver Mais Produtos ({produtosParaVoce.totalFiltrados - quantidadeVisivelScroolInfinite} restantes)
                        </button>   
                    </div>
                )}
            </div>
        </>
    )
}