import { useEffect, useState } from "react"
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import AdicionarTarefas from './componentes/AdicionarTarefas'
import Tabela from './componentes/Tabela'

function App() {
  const tarefa = {
    id: 0,
    tarefa: '',
    descricao:'' 
  }
  const [btnCadastrar, setBtnCadastrar] = useState(true)
  const [tarefas, setTarefas] = useState ([]);
  const [objTarefa, setObjTarefa] = useState(tarefa)
  
  useEffect(() => {
    fetch("http://localhost:8080/listar")
    .then(tarefas => tarefas.json())
    .then(tarefas_convertidas => setTarefas(tarefas_convertidas))
  },[]); 
  
  const aoDigitar = (e) => {
    setObjTarefa({...objTarefa, [e.target.name] : e.target.value});
  } 
  const cadastrar = () => {
    fetch('http://localhost:8080/cadastrar',{
      method: 'post',
      body:JSON.stringify(objTarefa),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(tarefas => tarefas.json())
    .then(tarefas_convertidas => {
      if (tarefas_convertidas.mensagem !== undefined){
        alert(tarefas_convertidas.mensagem)
      }else {
        setTarefas([...tarefas, tarefas_convertidas]);
        alert('Produto cadastrado com sucesso')
        limparFormulario();
      }
    })
  }  

  const alterar = () => {
    fetch('http://localhost:8080/alterar',{
      method:"put",
      body:JSON.stringify(objTarefa),
      headers:{
        'Content-type':'application/json',
        'Accept': 'application/json'
      }
    })
    .then(tarefas => tarefas.json())
    .then(tarefas_convertidas => {
  
      if (tarefas_convertidas.mensagem !== undefined){
        alert(tarefas_convertidas.mensagem)
      }else {
        alert('Tarefa alterada com sucesso')
  
        let vetorTemp = [...tarefas];
  
      let indice = vetorTemp.findIndex((p) => {
        return p.id === objTarefa.id;
      });
      vetorTemp[indice] = objTarefa
      
      setTarefas(vetorTemp);
  
      limparFormulario();
      }
    })
  }

  const remover = () => {
    fetch('http://localhost:8080/remover/' + objTarefa.id,{
      method:"delete",
          headers:{
        'Content-type':'application/json',
        'Accept': 'application/json'
      }
    })
    .then(tarefas => tarefas.json())
    .then(tarefas_convertidas => {
      alert(tarefas_convertidas.mensagem);
  
      let vetorTemp = [...tarefas];
  
      let indice = vetorTemp.findIndex((p) => {
        return p.id === objTarefa.id;
      });
      vetorTemp.splice(indice, 1);

      setTarefas(vetorTemp);

      limparFormulario();
    })}  
  
  const limparFormulario = () => {
    setObjTarefa(tarefa);
    setBtnCadastrar(true);
  }
  const selecionarProduto = (indice) => {
    setObjTarefa(tarefas[indice]);
    setBtnCadastrar(false);
  }
  return (
    <div>
      <AdicionarTarefas botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} obj={objTarefa} cancelar={limparFormulario} remover={remover} alterar={alterar}/>
      <Tabela vetor={tarefas} selecionar={selecionarProduto}/>
    </div>
  )
}

export default App
