import { useNavigate } from 'react-router'
import './Header.css'
import { useState } from 'react'

export default function Header() {

  const navigate = useNavigate()
  const [optionsOpen, setOptionsOpen] = useState(false)

  const handleLogoClick = () => {
    navigate('/')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }
  const handlePlusClick = () => {
    setOptionsOpen(prev => !prev)
  }

  const FormEvent = (e) => {
    e.preventDefault()
  }

  return (
    <header className="header">
      <nav className="navbar" >
        <div className="d-flex w-100 justify-content-center align-items-center flex-wrap" >
          <img src="/public/assets/Logo/logo1.png" role='button' width="150" height="50" onClick={handleLogoClick}/>
          <form className="d-flex m-2 w-50" role="search" onSubmit={FormEvent} >
            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
            <button className="btn-nav w-25 " type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="btn-nav w-25 ms-1 btn-bars d-none" onClick={handlePlusClick} ><i class="fa-solid fa-bars"></i></button>
          </form>
          <div className={`options w-75 ${optionsOpen ? 'd-block' : 'd-none'}`}>
            <ul className='list-unstyled'>
              <li className='item-list'><h3>Bem vindo</h3><p className='fs-6'>Entra na sua conta para ver suas compras, favoritos etc.</p><button className='btn btn-nav btn-entrar' onClick={handleLoginClick}>Entrar/Cadastrar</button></li>
              <li className='item-list'><i class="fa-solid fa-house me-2"></i>Início</li>
              <li className='item-list'><i class="fa-solid fa-clock-rotate-left me-2"></i>Histórico</li>
              <li className='item-list'><i class="fa-solid fa-address-book me-2"></i>Contato</li>
              <li className='item-list'><i class="fa-solid fa-tag me-2"></i>Ofertas</li>
            </ul>
          </div>
          <div className="d-flex align-items-center ms-5">
            <button className="btn-nav btn-login me-3" style={{width: 200}} onClick={handleLoginClick}><i className="fa-solid fa-user"></i>Entrar/Cadastre-se</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
