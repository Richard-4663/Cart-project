import { useState } from "react"
import './Price-section.css'
import useWindowWidth from "../../../hooks/useWindowWidth.js"

export default function PriceSection({produto}){

    const [placeholder, setPlaceholder] = useState("Inserir CEP")
    const largura = useWindowWidth();
    const [CEP, setCEP] = useState('');
    const [exibirCEP, setExibirCEP] = useState()
    const [erroCEP, setErroCEP] = useState('') 

    async function BuscarCEP(CEP){
        setErroCEP('')
        setExibirCEP(null) 
        
        const resp = await fetch(`https://brasilapi.com.br/api/cep/v1/${CEP}`)
        if (resp.status === 200){
            const obj = await resp.json()
            setExibirCEP(obj)
        }
        else{
            setErroCEP('CEP não encontrado')
        }
    }
    
    const handleSubmit = (e) => {
        e.preventDefault() 
        if (CEP.length === 8) {
            BuscarCEP(CEP)
        } else {
            setErroCEP('Digite um CEP válido (8 dígitos)')
        }
    }

    const formatarCepExibicao = (cep) => {
        if (cep.length <= 5) return cep
        return `${cep.slice(0,5)}-${cep.slice(5,8)}`
    }

    return(
        <div className='p-3 rounded-3 price-section'>
            <div className="product-price text-white">
                <h1>R$ {Number(produto.preco).toFixed(2)}</h1>
                <p className='fs-6'>À vista no PIX com 10% de desconto</p>
            </div>

            <div className="price-fixed z-2">
                <div className={`d-flex ${largura >= 668 && 'gap-3'}`}>
                    <button className={`btn-buy w-50 p-3 ${largura <= 668 && "rounded-0"}`}>
                        <i className="fas fa-cart-plus"></i>Comprar Agora
                    </button>
                    <button className={`btn-add w-50 p-3 ${largura <= 668 && "rounded-0"}`}>
                        <i className="fas fa-cart-plus"></i> Adicionar
                    </button>
                </div>
            </div>

            <div className='mt-4'>
                <h4><i className="fa-solid fa-truck me-2 text-white"></i>Consulte seu frete</h4>
                <form onSubmit={handleSubmit} className='d-flex justify-content-center frete'> {/* Adicionei onSubmit */}
                    <input className="form-control w-50 me-3" type="text" value={formatarCepExibicao(CEP)} onChange={(e) => setCEP(e.target.value.replace(/\D/g, ''))} onFocus={() => setPlaceholder('_____-___')} onBlur={() => setPlaceholder("Inserir CEP")} placeholder={placeholder} maxLength={9}/>
                    <button type="submit" className="btn-add w-25"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
                
                {erroCEP && (
                    <div className="mt-2 text-danger">
                        <i className="fas fa-exclamation-circle me-2"></i>
                        {erroCEP}
                    </div>
                )}
                
                {exibirCEP && !erroCEP && ( 
                    <div className="mt-3">
                        <h5 className="text-white">Endereço:</h5>
                        <p className="text-white-50">{exibirCEP.street}, {exibirCEP.neighborhood} - {exibirCEP.city}, {exibirCEP.state} </p>
                    </div>
                )}
            </div>
        </div>
    )
}