import './Input.css';

const Input = (props) => {
    
    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return (
        <div className="flex">
            <label className="label">{props.label}</label>
            <input value={props.valor} onChange={(e) => {props.aoAlterado(e.target.value)} } required={props.obrigatorio} className="input" placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;