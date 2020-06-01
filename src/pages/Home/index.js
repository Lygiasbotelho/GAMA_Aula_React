import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';


function App(props) {
  /* const usuario = useState('Lygia')*/
  const history = useHistory();
  const [usuario, setUsuario] = useState(''); //array que pode ser desestruturado
  const [erro, setErro] = useState(false);

  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`)
      .then(response => {
        const repositories = response.data;
        const repositoriesName = [];

        repositories.map((repository) => {
          repositoriesName.push(repository.name);     //console.log(JSON.stringify(repositories));

        });
        localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
        setErro(false);
        history.push('./repositories');
      })
      .catch(erro => {
        setErro(true);
      });
  }

  return (
    /*
    <><p>{usuario}</p><h1>{props.title} {props.user} </h1></>*/

    //Usando fragment - evita de quebrar o código com divs extras
    <S.HomeContainer>
      <S.Content>
        
        <S.Input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuario"
          value={usuario} onChange={e => setUsuario(e.target.value)} />
        <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
       
      </S.Content>
      { erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : '' }
    </S.HomeContainer>

  );
}

export default App;
