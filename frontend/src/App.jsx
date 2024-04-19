import { useEffect, useState } from "react"

function App() {

  const [tarefas, setTarefas] = useState ([]);
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(tarefas => tarefas.json())
    .then(tarefas_convertidas => setTarefas(tarefas))
  },[]);

  
  return (
    <div>
      
    </div>
  )
}

export default App
