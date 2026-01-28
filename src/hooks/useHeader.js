import { useState } from 'react'

export default function UseHeader(){
    const [optionsOpen, setOptionsOpen] = useState(false)
    
    const handlePlusClick = () => {
      setOptionsOpen(prev => !prev)
    }

    const FormEvent = (e) => {
      e.preventDefault()
    }

    return {
        handlePlusClick,
        FormEvent,
        optionsOpen
    }

}
  
