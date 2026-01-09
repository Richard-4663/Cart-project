import './DescriptionProductSection.css'

export default function DescriptionProductSection({produto}){
    return(
        <div className='d-flex flex-wrap h-100'>

            <div>
                <h2 className="">{produto.nome}</h2>
                <div className='d-flex flex-wrap my-4 align-items-center'>
                <i class="fa-solid fa-boxes-stacked me-2"></i><h4 className={produto.qntEstoque > 0 ? 'stock-count text-success': 'stock-count text-danger'}>{produto.qntEstoque > 0 ? 'Em estoque' : 'Produto indisponível'}</h4>
                </div>

            {produto.categoria === "roupas" && (
                <div>
                <h3>Tamanho:</h3>
                <div className='d-flex flex-wrap'>
                    <button className="btn-size p-2 m-2">PP</button>
                    <button className="btn-size p-2 m-2">P</button>
                    <button className="btn-size p-2 m-2">M</button>
                    <button className="btn-size p-2 m-2">G</button>
                    <button className="btn-size p-2 m-2" >GG</button>
                </div>
                </div>
            )}

            <div className='mt-5'>
                <h3>Descrição do produto</h3>
                <p>{produto.descricao}</p>
            </div>
            
            </div>

        </div>
    )
}