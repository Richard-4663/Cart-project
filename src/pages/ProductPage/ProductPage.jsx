import { useSearchParams } from 'react-router';
import './ProductPage.css'

export default function ProductPage(){

    const [searchParams] = useSearchParams();
    const nameProduct = searchParams.get("nome") 
    const priceProduct = searchParams.get("preco") 
    const categoryProduct = searchParams.get("categoria") 
    const quantityProduct = searchParams.get("estoque") 
    const imgProduct = searchParams.get("imagem") 

    return(
        <div className="wrapper d-flex justify-content-center align-items-center min-vh-100 min-vw-100">
            <div className="bg-light p-4 rounded-2 w-75 h-50 ">
                <h1 className='p-4'>Detalhes do produto</h1>
                <div className="details products p-5 bg-body-secondary">
                    <div className="h-100">
                        <img src={imgProduct} alt="" className='w-100' />
                    </div>
                    <div>
    
                        <h2 className="">{nameProduct}</h2>
                        <div className="product-price fs-1">R$ {Number(priceProduct).toFixed(2)}</div>
                        <div className="product-category fs-5">
                            <i className="fas fa-tag"></i>Categoria: {categoryProduct}
                        </div>
                        <div className="product-stock">
                            <i className="fas fa-box"></i> Estoque: <span className="stock-count">{quantityProduct}</span>
                        </div>
                        <br />
                        <button className="btn-add">
                            <i className="fas fa-cart-plus"></i> Adicionar
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}