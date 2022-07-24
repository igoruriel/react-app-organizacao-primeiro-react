import './Colaborador.css';

const Colaborador = ({nome, imagem, cargo, corPrimaria}) => {
    return(
        <div className='colaborador'>
            <div className='colaborador__conteudo'>
                <div className='top' style={{backgroundColor: corPrimaria}}>
                    <img src={imagem} alt={nome}/>
                </div>
                <div className='bot'>
                    <h4>{nome}</h4>
                    <span>{cargo}</span>
                </div>
            </div>
        </div>
    )
}

export default Colaborador;