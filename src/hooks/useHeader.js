import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function UseHeader(){

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

    return {
        navigate,
        handleLogoClick,
        handleLoginClick,
        handlePlusClick,
        FormEvent,
        optionsOpen
    }

}
  
