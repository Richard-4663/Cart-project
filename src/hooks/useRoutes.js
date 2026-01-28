import { useNavigate } from 'react-router'

export default function useRoutes(){

    const navigate = useNavigate()
    
    const handleLogoClick = () => {
      navigate('/')
    }
    const handleLoginClick = () => {
      navigate('/login')
    }
    const handleCartClick = () => {
      navigate('/cart')
    }
    const handleOffersClick = () => {
      navigate('/ofertas')
    }

    return {
        handleLogoClick,
        handleLoginClick,
        handleCartClick,
        handleOffersClick
    }
}
