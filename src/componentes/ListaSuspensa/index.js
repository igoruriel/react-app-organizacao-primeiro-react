import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    return (
        <div className="flex">
            <label className="label">{props.label}</label>
            <select className="select">
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>   
    )
}

export default ListaSuspensa