import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';



function Consulta() {

  let consul = localStorage.getItem('consulta');
  setTimeout(() => {
    window.print();
  }, 1000);
  const navigate = useNavigate();

  function voltar(){
    navigate('/App');
  };
  return (
    <div id="Cons">
        <div id="subtitulo2">
         CONSULTA
       </div>
       <div id="titulo2">
         HOSPITAL DA MULHER.
       </div>
       <div id="consulta">
        <strong>{consul}</strong>
       </div>
       <button id="voltar" type="button" onClick={voltar}>Voltar</button>
      </div>
  );
};



export default Consulta;
