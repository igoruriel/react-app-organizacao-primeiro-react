import Botao from '../Botao/index.js';
import Input from '../Input/Input.js';
import ListaSuspensa from '../ListaSuspensa/index.js';
import './Form.css';

const Formulario = () => {
    const itens = [
        'role 1', 
        'role 2', 
        'role 3', 
        'role 4'
    ]

    const submitForm = (e) => {
        e.preventDefault();
        console.log(Formulario);
    }
    return (
        <section className="sect__formulario">
            <form onClick={submitForm} className="formulario">
                <h2 className="formulario__titulo">Preencha os dados para criar o card do colaborador.</h2>
                <Input label="Nome" placeholder="Digite seu nome" />
                <Input label="Cargo" placeholder="Digite seu cargo" />
                <Input label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa label="lista" itens={itens}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;