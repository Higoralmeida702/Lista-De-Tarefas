import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import AdicionarTarefas from "./componentes/AdicionarTarefas";
import TarefasConcluidas from "./componentes/TarefasConcluidas";
import TarefasPendentes from "./componentes/TarefasPendentes";
import './styles.css'

function App() {
  const [tarefas, setTarefas] = useState ([]);
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(tarefas => tarefas.json())
    .then(tarefas_convertidas => setTarefas(tarefas))
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
      <Route path="/" element={<AdicionarTarefas/>}></Route>
      <Route path="/AdicionarTarefas" element={<AdicionarTarefas/>}></Route>
      <Route path="/TarefasConcluidas" element={<TarefasConcluidas/>}></Route>
      <Route path="/TarefasPendentes" element={<TarefasPendentes/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>  
    </div>
  )
}

export default App
