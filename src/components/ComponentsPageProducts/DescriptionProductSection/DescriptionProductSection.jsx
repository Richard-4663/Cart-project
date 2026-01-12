import './DescriptionProductSection.css'
import useWindowWidth from '../../../hooks/useWindowWidth.js'

export default function DescriptionProductSection({produto}){

    const largura = useWindowWidth();

    return(
        <div className='description d-flex flex-wrap h-100 my-4'>

            <div>
                <h4>{produto.nome}</h4>
                {largura <= 668 && (
                    <h1 className="product-price fs-1">R$ {produto.nome}</h1>
                )}

            {produto.categoria === "roupas" && (
                <div>
                    <h4>Tamanho:</h4>
                    <div className='d-flex flex-wrap'>
                        <button className="btn-size p-2 m-2">PP</button>
                        <button className="btn-size p-2 m-2">P</button>
                        <button className="btn-size p-2 m-2">M</button>
                        <button className="btn-size p-2 m-2">G</button>
                        <button className="btn-size p-2 m-2" >GG</button>
                    </div>
                </div>
            )}

            <div className='mt-3'>
                <h3>Descrição do produto</h3>
                <p>{produto.descricao}</p>
            </div>
            
            </div>

        </div>
    )
}