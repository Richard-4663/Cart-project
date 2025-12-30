import './Button.css'

export default function Button({text, onclick}){
    return(
        <div>
            <button onclick={onclick}>{text}</button>
        </div>
    )
}