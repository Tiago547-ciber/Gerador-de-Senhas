import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import ConsultaP from './Consulta - prioridade';
import Consulta from './Consulta';
import Central from './Central';
import CentralP from './Central - prioridade';
import Tomografia from './Tomografia';
import TomografiaP from './Tomografia - prioridade';
import Usg from './USG';
import UsgP from './USG - prioridade';
import Mamografia from './Mamografia';
import MamografiaP from './Mamografia - prioridade';
import Respirar from './Respirar';
import Login from './Login';
import Laboratorio from './Laboratorio';
import LaboratorioP from './Laboratorio - prioridade';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
    <Route path="/" element={<Login />} />  {/* Página principal */}
    <Route path="/Login" element={<Login />} />  {/* Página principal */}
      <Route path="/App" element={<App />} />  {/* Página principal */}
      <Route path="/Consulta" element={<Consulta />} />  {/* Página principal */}
      <Route path="/Consulta-prioridade" element={<ConsultaP />} />  {/* Rota para o componente Senha */}
      <Route path="/Central" element={<Central />} />  {/* Página principal */}
      <Route path="/Central - prioridade" element={<CentralP />} />  {/* Rota para o componente Senha */}
      <Route path="/Tomografia" element={<Tomografia />} />  {/* Página principal */}
      <Route path="/Tomografia - prioridade" element={<TomografiaP />} />  {/* Rota para o componente Senha */}
      <Route path="/USG" element={<Usg />} />  {/* Página principal */}
      <Route path="/USG - prioridade" element={<UsgP />} />  {/* Rota para o componente Senha */}
      <Route path="/Mamografia" element={<Mamografia />} />  {/* Página principal */}
      <Route path="/Mamografia - prioridade" element={<MamografiaP />} />  {/* Rota para o componente Senha */}
      <Route path="/Respirar" element={<Respirar />} />  {/* Página principal */}
      <Route path="/Laboratorio" element={<Laboratorio />} />  {/* Página principal */}
      <Route path="/Laboratorio - prioridade" element={<LaboratorioP />} />  {/* Página principal */}
    </Routes>
  </Router>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
