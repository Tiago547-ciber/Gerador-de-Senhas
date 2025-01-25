import React, {useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';




 
function Option() {
  const navigate = useNavigate();
  function Voltar() {
    navigate('/App');
  }

  function selecionado14() {
    var botao = document.getElementById("option");
    botao.style.backgroundColor = "gray";
    botao.style.width= "60px";
    botao.style.height= "60px";
  };

  function remove14() {
    var botao = document.getElementById("option");
    botao.style.backgroundColor = "white";
    botao.style.width= "50px";
    botao.style.height= "50px";
  };
  return (
    
    <div  id='Cons3' className="App">
      <button id='option' onClick={Voltar} type="button" onMouseEnter={selecionado14} onMouseLeave={remove14}>Option</button><br />

      <div className='result'>
        <label>CONSULTA</label><br /><p></p><br /><input id='input'  type='sandbox'></input><br />
      </div>  
      <div className='result2'>
        <label>CONSULTA - PRIORIDADE</label><br /><p></p><br /><input id='input'  type='sandbox'></input><br />
      </div>
      <div className='result3'>
        <label>CENTRAL</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />

      <div className='result4'>
        <label>CENTRAL - PRIORIDADE</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result5'>
        <label>TOMOGRAFIA</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result6'>  
        <label>TOMOGRAFIA - PRIORIDADE</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result7'>  
        <label>USG</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result8'>
        <label>USG - PRIORIDADE</label><br /><p></p><br /><input id='input'  type='sandbox'></input><br />
      </div>
      <div className='result9'> 
        <label>MAMOGRAFIA</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result10'>
        <label>MAMOGRAFIA - PRIORIDADE</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result11'>  
        <label>LABORATORIO</label><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result12'>
        <label>LABORATORIO - PRIORIDADE</label><br /><p></p><input id='input' type='sandbox'></input><br />
      </div>
      <div className='result13'>
        <label>PROJETO RESPIRAR</label><br /><p></p><br /><input id='input' type='sandbox'></input><br />
      </div>
      </div>
    </div>
  );
}



export default Option;


