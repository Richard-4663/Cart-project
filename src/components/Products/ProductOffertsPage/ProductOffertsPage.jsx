//importando hooks
import { useNavigate } from 'react-router'
import { useState } from 'react';
import useWindowWidth from '../../../hooks/useWindowWidth.js'

//importando funções e estilos
import { useCart } from '../../../context/CartContext.jsx'
import './ProductOffertsPage.css'

// importando componentes
import Button from '../../UI/Button/Button.jsx';

import { ofertasDoDia } from '../../../data/offersDay.js';

export default function ProductsOffers(){

    const cartFunctions = useCart();
    const largura  = useWindowWidth();
    const navigate = useNavigate();


    const [categoriaAtual, setCategoriaAtual] = useState('todos');
    const produtosFiltrados = cartFunctions.filtro(ofertasDoDia, categoriaAtual);

        function seeProduct(produto){

        const query = new URLSearchParams()
        query.set('id', produto.id)

        navigate(`/product?${query.toString()}`)
    }


    return (
            <div className="products md-4 text-start rounded-4">

                <div className="Btns d-flex gap-4 flex-wrap">
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('todos')} text={'Todos'} />
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('eletronicos')} text={'Eletronicos'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('roupas')} text={'Roupas'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('calcados')} text={'Calçados'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('livros')} text={'Livros'}/>
                    <Button categoriaAtual={categoriaAtual} onclick={() => setCategoriaAtual('emEstoque')} text={'Em estoque'}/>
                </div>

                <div className="items">
                    {produtosFiltrados.map(produto => 
                    <div onClick={() => seeProduct(produto)} key={produto.id} className="item-card" data-category="eletronicos">
                        <div className="product-image"> 
                            <h6 className='text-discont'>-{produto.desconto}%</h6>
                            <img className='product-image' src={produto.imagem[0]} width={200} height={180} alt="" />
                        </div>

                        <p className="product-name">{produto.nome}</p>

                        <div className="product-price">
                            {largura > 360 && (<s><h6>R$ {produto.precoOriginal.toFixed(2)}</h6></s>)}
                            R$ {produto.preco.toFixed(2)}
                        </div>
                        <div className='d-flex flex-wrap align-items-center'>
                            <i className="fa-solid fa-boxes-stacked me-2"></i><h6 className={`stock-count ${produto.qntEstoque > 0 ? 'text-success': 'text-danger'}`}>{produto.qntEstoque > 0 ? 'Em estoque' : 'Produto indisponível'}</h6>
                        </div>
                    </div>
                )}

                </div>
            </div>
    )
}