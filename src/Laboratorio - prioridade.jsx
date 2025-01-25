import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';



function LaboratorioPrioridade() {
  let consul = localStorage.getItem('laboratorioP');

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
        <div id="subtitulo2">
         LABORATÓRIO
       </div>
       <div id="titulo2">
        HOSPITAL DA MULHER.
       </div>
       <div id="consulta">
        <strong>{consul}</strong>
       </div>
       <div id="titulo4">
         PRIORIDADE
       </div>
      </div>
      <button id="voltar" type="button" onClick={voltar}>Voltar</button>
    </div>
  );
}



export default LaboratorioPrioridade;
