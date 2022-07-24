import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    return (
        <div className="flex">
            <label className="label">{props.label}</label>
            <select onChange={e=> props.aoAlterado(e.target.value)} value={props.valor} className="select">
                <option value={''}></option>
                {props.times.map(time => <option key={time}>{time}</option>)}
            </select>
        </div>   
    )
}

export default ListaSuspensa