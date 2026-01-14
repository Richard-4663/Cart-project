//importando hooks
import { useNavigate } from 'react-router'
import { useState } from 'react'
import useWindowWidth from '../../../hooks/useWindowWidth.js'

//importando funções e estilos
import useCart from '../../../hooks/useCart.js'
import './produtos.css'

export default function Products({produtos, ofertasDia}){
    const cartFunctions = useCart();
    const largura = useWindowWidth();
    
    const [categoriaAtual, setCategoriaAtual] = useState('todos');
    const [quantidadeVisivelScroolInfinite, setquantidadeVisivelScroolInfinite] = useState(6);
    const quantidadeVisivelAmostras = 6;
    
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
    const produtosOferta = prepararProdutos(ofertasDia, quantidadeVisivelAmostras);
    
    function seeProduct(produto){
        const query = new URLSearchParams()
        query.set('id', produto.id)
        navigate(`/product?${query.toString()}`)
    }

    return(
        <>
            <div className="products md-4 text-start rounded-3">
                <div className='d-flex align-items-center p-2 mb-3 ofertas-dia'>
                    <h3>🔥 Ofertas do dia</h3>
                </div>

                <div className="items">
                    {produtosOferta.limitados.map(produto => 
                    <div onClick={() => seeProduct(produto)} key={produto.id} className="item-card" data-category="eletronicos">
                        <div className="product-image"> 
                            <h6 className='text-discont'>-{produto.desconto}%</h6>
                            <img className='product-image' src={produto.imagem[0]} width={200} height={180} alt="" />
                        </div>

                        <p className="product-name">{produto.nome}</p>

                        <div className="product-price">
                            {largura > 360 && (
                                <s><h6>R$ {produto.precoOriginal.toFixed(2)}</h6></s>)
                            }
                            R$ {produto.preco.toFixed(2)}
                        </div>
                        <div className='d-flex flex-wrap align-items-center'>
                            <i className="fa-solid fa-boxes-stacked me-2"></i>
                            <h6 className={`stock-count ${produto.qntEstoque > 0 ? 'text-success': 'text-danger'}`}>
                                {produto.qntEstoque > 0 ? 'Em estoque' : 'Produto indisponível'}
                            </h6>
                        </div>
                    </div>
                )}

                </div>

                {quantidadeVisivelAmostras < produtosOferta.totalFiltrados && (
                    <div className="text-center mt-4">
                        <button className="btn btn-nav" onClick={() => navigate('/ofertas')}>
                            Ver Mais Produtos
                        </button>   
                    </div>
                )}
            </div>

            <div className="products mt-4 text-start rounded-3">
                <div className='d-flex align-items-center p-2 mb-3 ofertas-dia'>
                    <h3>🎁 Para você</h3>
                </div>

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