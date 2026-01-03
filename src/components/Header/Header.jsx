import { useNavigate } from 'react-router'
import './Header.css'
import Login from '../../pages/Login/Login.jsx'

export default function Header() {

  const navigate = useNavigate()

  const handleLogoClick = () => {
    navigate('/')
  }
  const handleLoginClick = () => {
    navigate('/login')
  }
  const handleRegisterClick = () => {
    navigate('/cadastro')
  }

  return (
    <header className="header" >
      <nav className="navbar" style={{height: 50}}>
        <div className="d-flex w-100 justify-content-center">
          <img src="/public/assets/Logo/logo1.png" alt="Bootstrap" width="150" height="50" className='' onClick={handleLogoClick}/>
          <form className="d-flex w-50 ms-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-add w-25 " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
          </form>
          <div className="d-flex align-items-center ms-5">
            <button className="btn btn-add me-3" style={{width: 150}} onClick={handleLoginClick}><i class="fa-solid fa-user"></i>Entrar</button>
            <button className="btn btn-add me-3 d-flex" style={{width: 150}} onClick={handleRegisterClick}><i class="fa-solid fa-user" ></i>Criar conta</button>  
          </div>
        </div>
      </nav>
    </header>
  )
}
