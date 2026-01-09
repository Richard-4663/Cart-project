import { useState } from "react"
import './ImgProductSection.css'

export default function ImgProductSection({produto}){

    const [imgAtual, setImgAtual] = useState(0)
    const showImg = (index) => {
      setImgAtual(index)
    }

    return(
        <div>
            <div className="carousel-container border">
                <div className="carousel-track" style={{ transform: `translateX(-${imgAtual * 100}%)`}}>
                {produto.imagem.map((img, index) => (
                    <img key={index} src={img} className="carousel-img" alt="" />
                ))}
                </div>
            </div>

            <div className='miniaturas d-flex gap-3'>
                <div ><img className='miniatura' role='button' onClick={() => showImg(0)} src={produto.imagem[0]} alt="" /></div>
                <div ><img className='miniatura' role='button' onClick={() => showImg(1)} src={produto.imagem[1]} alt="" /></div>
                <div ><img className='miniatura' role='button' onClick={() => showImg(2)} src={produto.imagem[2]} alt="" /></div>
                <div ><img className='miniatura' role='button' onClick={() => showImg(3)} src={produto.imagem[3]} alt="" /></div>
            </div>

        </div>
    )
}