import { useNavigate } from 'react-router'
import './Header.css'

export default function Header() {

  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <header className="header" >
      <nav className="navbar" style={{height: 30}}>
        {/* fazer um flex-wrap na div debaixo para quebrar o navbar para responsividade */}
        <div className="d-flex w-100 justify-content-center" style={{height: 40}}>
          <img src="/public/assets/Logo/logo1.png" role='button' width="150" height="50" onClick={handleLogoClick}/>
          <form className="d-flex w-50 ms-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn-nav w-25 " type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <div className="d-flex align-items-center ms-5">
            <button className="btn-nav me-3" style={{width: 200}} onClick={handleLoginClick}><i className="fa-solid fa-user"></i>Entrar/Cadastre-se</button>
          </div>
        </div>
      </nav>
    </header>
  )
}
