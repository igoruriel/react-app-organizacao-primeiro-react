import { useState } from 'react';
import Botao from '../Botao/index.js';
import Input from '../Input/Input.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import './Form.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        props.aoSubmit({
            nome, 
            cargo, 
            imagem, 
            time
        })
        limparInputs();
    }

    const limparInputs = () => {
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    return (
        <section className="sect__formulario">
            <form onSubmit={submitForm} className="formulario">
                <h2 className="formulario__titulo">Preencha os dados para criar o card do colaborador.</h2>
                <Input 
                    obrigatorio={true}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Input 
                    obrigatorio={true}
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Input
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    label="lista" 
                    times={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;