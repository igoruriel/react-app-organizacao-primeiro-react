import './Input.css';

const Input = (props) => {
    return (
        <div className="flex">
            <label className="label">{props.label}</label>
            <input className="input" placeholder={props.placeholder}/>
        </div>
    )
}

export default Input;