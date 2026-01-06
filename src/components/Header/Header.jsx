import UseHeader from '../../hooks/useHeader.js'
import './Header.css'


export default function Header() {

  const headerFunctions = UseHeader()

  return (
    <header className="header">
      <nav className="navbar" >
        <div className="d-flex w-100 justify-content-center align-items-center flex-wrap" >
          <img id='logo' src="/assets/Logo/logo1.png" role='button' width="150" height="50" onClick={headerFunctions.handleLogoClick}/>
          <form className="form-content d-flex m-2 w-50" role="search" onSubmit={headerFunctions.FormEvent} >
            <input className="form-control me-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
            <button className="btn-nav w-25 " type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
            <button className="btn-nav w-25 ms-1 btn-bars d-none" onClick={headerFunctions.handlePlusClick} ><i className="fa-solid fa-bars"></i></button>
          </form>
          <div className={`options w-100 ${headerFunctions.optionsOpen ? 'd-block' : 'd-none'}`}>
            <ul className='list-unstyled'>
              <li className='item-list'><h3>Bem vindo</h3><p className='fs-6'>Entra na sua conta para ver suas compras, favoritos etc.</p><button className='btn btn-nav btn-entrar' onClick={headerFunctions.handleLoginClick}>Entrar/Cadastrar</button></li>
              <li className='item-list bg-secondary bg-opacity-50' ><i className="fa-solid fa-house me-2"></i>Início</li>
              <li className='item-list'><i className="fa-solid fa-clock-rotate-left me-2"></i>Histórico</li>
              <li className='item-list'><i className="fa-solid fa-address-book me-2"></i>Contato</li>
              <li className='item-list'><i className="fa-solid fa-tag me-2"></i>Ofertas</li>
            </ul>
          </div>
          <div className="d-flex align-items-center ms-5">
            <button className="btn-nav btn-login me-3" style={{width: 200}} onClick={headerFunctions.handleLoginClick}><i className="fa-solid fa-user"></i>Entrar/Cadastre-se</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
