//importando hooks
import { useNavigate } from 'react-router'
import { useState } from 'react'
import useWindowWidth from '../../../hooks/useWindowWidth.js'

//importando funções e estilos
import { useCart } from '../../../context/CartContext.jsx'
import './ProductShowCase.css'

export default function ProductShowCase({produtos}){

    const cartFunctions = useCart();
    const largura = useWindowWidth();
    
    const [categoriaAtual, setCategoriaAtual] = useState('todos');
    const quantidadeVisivelAmostras = 10;
    
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
    
    const produtosOferta = prepararProdutos(produtos, quantidadeVisivelAmostras);
    
    function seeProduct(produto){
        const query = new URLSearchParams()
        query.set('id', produto.id)
        navigate(`/product?${query.toString()}`)
    }

    return(
            <div className="products text-start rounded-3">

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
                            {largura > 360 && (
                                <div>
                                    <i className="fa-solid fa-boxes-stacked me-2"></i>
                                    <h6 className={`stock-count ${produto.qntEstoque > 0 ? 'text-success': 'text-danger'}`}>
                                        {produto.qntEstoque > 0 ? 'Em estoque' : 'Produto indisponível'}
                                    </h6>
                                </div>
                            )
                            }
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
    )
}