import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulário/Form';
import Rodape from './componentes/Rodape/index.';

import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Back-end',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }
  ]
  const [colaboradores, setColaboradores] = useState([]);

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoSubmit={colaborador => { setColaboradores([...colaboradores, colaborador]) }} />
      {times.map(time =>
          <Time 
            key={time.nome} 
            titulo={time.nome} 
            corPrimaria={time.corPrimaria} 
            corSecundaria={time.corSecundaria}
            colaborador={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
        )}
      <Rodape />
    </div>
  );
}

export default App;
