//importando hooks
import { useNavigate } from 'react-router'
import { useState } from 'react'

//importando funções e estilos
import useCart from '../../../hooks/useCart.js'
import './produtos.css'

//importando componentes
import Button from '../Button/Button.jsx'

export default function Products({produtos}){

    const cartFunctions = useCart();

    const [categoriaAtual, setCategoriaAtual] = useState('todos');
    const [quantidadeVisivel, setQuantidadeVisivel] = useState(6);
    
    const produtosFiltrados = cartFunctions.filtro(produtos, categoriaAtual);
    const produtosLimitados = produtosFiltrados.slice(0, quantidadeVisivel); // Limita aqui

    const navigate = useNavigate()
    
    function seeProduct(produto){

        const query = new URLSearchParams()
        query.set('id', produto.id)

        navigate(`/product?${query.toString()}`)
    }


    return(
            <div className="products md-4 text-start rounded-3">
                <div className='d-flex align-items-center p-2 mb-3 ofertas-dia'>
                    <h3>🔥 Ofertas do dia</h3>
                </div>

                {/* <div className="Btns d-flex gap-4 flex-wrap">
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('todos')} text={'Todos'} />
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('eletronicos')} text={'Eletronicos'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('roupas')} text={'Roupas'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('calcados')} text={'Calçados'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('livros')} text={'Livros'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('emEstoque')} text={'Em estoque'}/>
                </div> */}

                <div className="items">
                    {produtosLimitados.map(produto => 
                    <div onClick={() => seeProduct(produto)} key={produto.id} className="item-card" data-category="eletronicos">
                        <div className="product-image">
                            <img className='product-image' src={produto.imagem[0]} width={200} height={180} alt="" />
                        </div>

                        <p className="product-name">{produto.nome}</p>

                        <div className="product-price">R$ {produto.preco.toFixed(2)}</div>
                        <div className='d-flex flex-wrap align-items-center'>
                            <i className="fa-solid fa-boxes-stacked me-2"></i><h6 className={`stock-count ${produto.qntEstoque > 0 ? 'text-success': 'text-danger'}`}>{produto.qntEstoque > 0 ? 'Em estoque' : 'Produto indisponível'}</h6>
                        </div>
                    </div>
                )}

                </div>

                {quantidadeVisivel < produtosFiltrados.length && (
                    <div className="text-center mt-4">
                        <button className="btn btn-nav" onClick={() => setQuantidadeVisivel(prev => prev + 10)}>
                            Ver Mais Produtos ({produtosFiltrados.length - quantidadeVisivel} restantes)
                        </button>   
                    </div>
                )}
            </div>
    )
}