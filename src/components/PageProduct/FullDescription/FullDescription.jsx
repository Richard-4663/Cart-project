import './FullDescription.css'

export default function FullDescription({produto}){
    return (
        <div className="full-description">
            <h1>Descrição completa</h1>
            <p className="text-secondary fs-6" style={{ whiteSpace: 'pre-line'}}>
                {produto.descricao}<br />
                {produto.descricaoCompleta}
            </p>
        </div>
    )
}