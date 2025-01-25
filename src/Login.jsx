import React, {useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './App.css';



 
function Login() {
  localStorage.clear();
  let cont = 0;
  useEffect(() => {


    const timer = setInterval(() => {
      if (cont >= 0) {
          cont += 1;
          var body = document.getElementById('Cons2');
          body.style.background = 'linear-gradient(' + cont + 'deg, rgb(0, 128, 107) , white , rgb(0, 77, 128))';
      }
      else {
        
      }}, 100);
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  const navigate = useNavigate();
  function Login() {
    var a = document.getElementById('login').value;
    var b = document.getElementById('senha').value;
    var dados = {
      login: 'Doralice',
      senha: 220522
    };
    if (dados.login == a  && dados.senha == b) {
      navigate('/App');
    }else {
      window.alert('Dados errados. Tente novamente.')
    }
  }

  function selecionado12() {
    var botao = document.getElementById("botao");
    botao.style.backgroundColor = "gray";
    botao.style.borderRadius = "15px";
  }

  function remove12() {
    var botao = document.getElementById("botao");
    botao.style.backgroundColor = "white";
    botao.style.borderRadius = "5px";
  };

  return (
    <div  id='Cons2' className="App">
      <div class="bloco">
        <div id="titulo">
         HOSPITAL DA MULHER.
       </div>
       <div id="subtitulo">
         <label>Login</label><br />
         <input id='login'></input><br />
         <label>Senha</label><br />
         <input id='senha'></input><br />
         <button id="botao" className="botaoL" type="button" onClick={Login} onMouseEnter={selecionado12} onMouseLeave={remove12}>ENTRAR</button>
       </div>
      </div>
    </div>
  );
}



export default Login;


