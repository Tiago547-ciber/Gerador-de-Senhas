import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';
import './Consulta.jsx';


 
function App() {
  
  let cont = 0;
  useEffect(() => {


    const timer = setInterval(() => {
      if (cont >= 0) {
          cont += 1;
          var body = document.getElementById('App');
          body.style.background = 'linear-gradient(' + cont + 'deg, rgb(0, 128, 107) , white , rgb(0, 77, 128))';
      }
      else {
        
      }}, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const navigate = useNavigate();
  function consulta() {
    let a = localStorage.getItem('consulta');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('consulta', y);
    navigate('/Consulta');
  }

  function consultaP() {
    let a = localStorage.getItem('consultaP');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('consultaP', y);
    navigate('/Consulta-prioridade');
  }

  function central() {
    let a = localStorage.getItem('central');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('central', y);
    navigate('/Central');
  }

  function centralP() {
    let a = localStorage.getItem('centralP');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('centralP', y);
    navigate('/Central - prioridade');
  }
  function tomografia() {
    let a = localStorage.getItem('tomografia');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('tomografia', y);
    navigate('/Tomografia');
  }
  function tomografiaP() {
    let a = localStorage.getItem('tomografiaP');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('tomografiaP', y);
    navigate('/Tomografia - prioridade');
  }
  function usg() {
    let a = localStorage.getItem('usg');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('usg', y);
    navigate('/USG');
  }
  function usgP() {
    let a = localStorage.getItem('usgP');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('usgP', y);
    navigate('/USG - prioridade');
  }
  function mamografia() {
    let a = localStorage.getItem('mamografia');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('mamografia', y);
    navigate('/Mamografia');
  };
  function mamografiaP() {
    let a = localStorage.getItem('mamografiaP');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('mamografiaP', y);
    navigate('/Mamografia - prioridade');
  };
  function respirar() {
    let a = localStorage.getItem('respirar');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('respirar', y);
    navigate('/Respirar');
  };

  function laboratorio() {
    let a = localStorage.getItem('laboratorio');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('laboratorio', y);
    navigate('/Laboratorio');
  };
  function laboratorioP() {
    let a = localStorage.getItem('laboratorioP');
    let y = Number(a) + 1;
    let consul = localStorage.setItem('laboratorioP', y);
    navigate('/Laboratorio - prioridade');
  };





  function selecionado() {
    var botao = document.getElementById("selecionado");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };

  function selecionado2() {
    var botao = document.getElementById("selecionado2");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado3() {
    var botao = document.getElementById("selecionado3");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado4() {
    var botao = document.getElementById("selecionado4");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado5() {
    var botao = document.getElementById("selecionado5");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado6() {
    var botao = document.getElementById("selecionado6");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado7() {
    var botao = document.getElementById("selecionado7");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado8() {
    var botao = document.getElementById("selecionado8");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado9() {
    var botao = document.getElementById("selecionado9");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado10() {
    var botao = document.getElementById("selecionado10");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado11() {
    var botao = document.getElementById("selecionado11");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado12() {
    var botao = document.getElementById("selecionado12");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };
  function selecionado13() {
    var botao = document.getElementById("selecionado13");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  };




  function remove() {
    var botao = document.getElementById("selecionado");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove2() {
    var botao = document.getElementById("selecionado2");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove3() {
    var botao = document.getElementById("selecionado3");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove4() {
    var botao = document.getElementById("selecionado4");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove5() {
    var botao = document.getElementById("selecionado5");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove6() {
    var botao = document.getElementById("selecionado6");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove7() {
    var botao = document.getElementById("selecionado7");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove8() {
    var botao = document.getElementById("selecionado8");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove9() {
    var botao = document.getElementById("selecionado9");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove10() {
    var botao = document.getElementById("selecionado10");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove11() {
    var botao = document.getElementById("selecionado11");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove12() {
    var botao = document.getElementById("selecionado12");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };
  function remove13() {
    var botao = document.getElementById("selecionado13");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };

  

  return (
    <div id="App">
      <div className="bloco">
        <div id="titulo">
         HOSPITAL DA MULHER.
       </div>
       <div id="subtitulo">
         GERADOR DE SENHAS.
       </div>
      </div>
      <div id="bloco2">
        <button id="selecionado" className="botao" type="button" onClick={consulta} onMouseEnter={selecionado} onMouseLeave={remove}>CONSULTA</button><br/>
        <button id="selecionado2" className="botao" type="button" onClick={consultaP} onMouseEnter={selecionado2} onMouseLeave={remove2}>CONSULTA - PRIORIDADE</button><br/>
        <button id="selecionado3" className="botao" type="button" onClick={central} onMouseEnter={selecionado3} onMouseLeave={remove3}>CENTRAL DE AGENDAMENTO</button><br/>
        <button id="selecionado4" className="botao" type="button" onClick={centralP} onMouseEnter={selecionado4} onMouseLeave={remove4}>CENTRAL DE AGENDAMENTO - PRIORIDADE</button><br/>
        <button id="selecionado5" className="botao" type="button" onClick={tomografia} onMouseEnter={selecionado5} onMouseLeave={remove5}>TOMOGRAFIA</button><br/>
        <button id="selecionado6" className="botao" type="button" onClick={tomografiaP} onMouseEnter={selecionado6} onMouseLeave={remove6}>TOMOGRAFIA - PRIORIDADE</button><br/>
        <button id="selecionado7" className="botao" type="button" onClick={usg} onMouseEnter={selecionado7} onMouseLeave={remove7}>EXAMES USG</button><br/>
        <button id="selecionado8" className="botao" type="button" onClick={usgP} onMouseEnter={selecionado8} onMouseLeave={remove8}>EXAMES USG - PRIORIDADE</button><br/>
        <button id="selecionado9" className="botao" type="button" onClick={mamografia} onMouseEnter={selecionado9} onMouseLeave={remove9}>MAMOGRAFIA</button><br/>
        <button id="selecionado10" className="botao" type="button" onClick={mamografiaP} onMouseEnter={selecionado10} onMouseLeave={remove10}>MAMOGRAFIA - PRIORIDADE</button><br/>
        <button id="selecionado12" className="botao" type="button" onClick={laboratorio} onMouseEnter={selecionado12} onMouseLeave={remove12}>LABORATÓRIO</button><br/>
        <button id="selecionado13" className="botao" type="button" onClick={laboratorioP} onMouseEnter={selecionado13} onMouseLeave={remove13}>LABORATÓRIO - PRIORIDADE</button><br/>
        <button id="selecionado11" className="botao" type="button" onClick={respirar} onMouseEnter={selecionado11} onMouseLeave={remove11}>PROJETO RESPIRAR</button>
      </div>
    </div>
  );
}



export default App;


