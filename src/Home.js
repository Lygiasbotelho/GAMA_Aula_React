import React, { useState } from 'react';
import axios from 'axios';


function App(props) {
/* const usuario = useState('Lygia')*/
  const [usuario, setUsuario] = useState('') //array que pode ser desestruturado
  
  function handlePesquisa() {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => console.log(response.data));
  }

  return (
    //Usando fragment - evita de quebrar o código com divs extras
    <>
      <p>{usuario}</p>
      <h1>{props.title} {props.user} </h1>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)} />

      <button type="button" onClick={handlePesquisa}> Pesquisar </button>
    </>

  );
}

export default App;
