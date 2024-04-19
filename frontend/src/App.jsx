import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import AdicionarTarefas from "./componentes/AdicionarTarefas";
import TarefasConcluidas from "./componentes/TarefasConcluidas";
import TarefasPendentes from "./componentes/TarefasPendentes";
import Tabela from "./componentes/Tabela"
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [tarefas, setTarefas] = useState ([]);
  
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(tarefas => tarefas.json())
    .then(tarefas_convertidas => setTarefas(tarefas_convertidas))
  },[]); 
  
  
  return (
    <div>
      <div className="headerNavegacao">
      <BrowserRouter>
      <ul>
      <li className="menu-item"><Link to="/AdicionarTarefas">Adicionar Tarefas</Link></li>
      <li className="menu-item"><Link to="/TarefasConcluidas">Tarefas Concluidas</Link></li>
      <li className="menu-item"><Link to="/TarefasPendentes">Tarefas Pendentes</Link></li>
      </ul>
      <Routes>
      <Route path="/" element={<AdicionarTarefas botao={btnCadastrar} />}></Route>
      <Route path="/AdicionarTarefas" element={<AdicionarTarefas botao={btnCadastrar}/>}></Route>
      <Route path="/TarefasConcluidas" element={<TarefasConcluidas/>}></Route>
      <Route path="/TarefasPendentes" element={<TarefasPendentes/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>  
      <Tabela vetor={tarefas}/>
    </div>
  )
}

export default App
