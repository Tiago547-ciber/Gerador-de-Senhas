import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';



function Consulta() {
  let consul = localStorage.getItem('central');

  setTimeout(() => {
    window.print();
  }, 1000);
 
  const navigate = useNavigate();

  function voltar(){
    navigate('/App');
  };
  return (
    <div id="Cons">
      <div className="bloco">
        <div id="subtitulo6">
         CENTRAL DE AGENDAMENTOS
       </div>
       <div id="titulo3">
         HOSPITAL DA MULHER.
       </div>
       <div id="consulta">
        <strong>{consul}</strong>
       </div>
       <button id="voltar" type="button" onClick={voltar}>Voltar</button>
      </div>
    </div>
  );
}



export default Consulta;
