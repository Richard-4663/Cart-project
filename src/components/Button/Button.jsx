import './Button.css'

export default function Button({text, onclick, categoriaAtual}){

    return(
        <div>
            <button className={categoriaAtual === text.toLowerCase() ? 'active' : ''}  onClick={() => onclick(text.toLowerCase())}>{text}</button>
        </div>
    )
}