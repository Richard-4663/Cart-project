import { useState } from "react"
import './ImgProductSection.css'

export default function ImgProductSection({ produto }) {
    const [imgAtual, setImgAtual] = useState(0)
    
    const showImg = (index) => {
        setImgAtual(index)
    }

    // Verifica se o produto tem imagens
    if (!produto?.imagem || produto.imagem.length === 0) {
        return <div className="d-flex justify-content-center">Sem imagens</div>
    }

    return (
        <div className="d-flex justify-content-center flex-wrap">
            {/* Carrossel Principal */}
            <div className="carousel-container border">
                <div 
                    className="carousel-track" 
                    style={{ transform: `translateX(-${imgAtual * 100}%)` }}
                >
                    {produto.imagem.map((img, index) => (
                        <img 
                            key={index} 
                            src={img} 
                            className="carousel-img" 
                            alt={`Produto ${index + 1}`} 
                            loading="lazy"
                        />
                    ))}
                </div>
                
                {/* Indicadores (opcional) */}
                {produto.imagem.length > 1 && (
                    <div className="carousel-indicators">
                        {produto.imagem.map((_, index) => (
                            <button
                                key={index}
                                className={`indicator ${index === imgAtual ? 'ativo' : ''}`}
                                onClick={() => showImg(index)}
                                aria-label={`Ir para imagem ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Miniaturas */}
            <div className='miniaturas gap-3'>
                {produto.imagem.map((img, index) => (
                    <div key={index}>
                        <img 
                            className={`miniatura ${index === imgAtual ? 'ativa' : ''}`}
                            role='button' 
                            onClick={() => showImg(index)}
                            src={img} 
                            alt={`Miniatura ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}