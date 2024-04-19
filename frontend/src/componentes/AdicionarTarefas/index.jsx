import React from 'react';
import './AdicionarTarefas.css';

// Definindo a função Tabela fora do escopo do componente AdicionarTarefas
function Tabela() {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Tarefa</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>      
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><button className="btn btn-success">Selecionar</button></td>   
                </tr>     
            </tbody>
        </table>
    );
}

const AdicionarTarefas = () => {
    return (
        <div>
            
            <div className='adicionarTarefas'>
            <h1>Adicionar Tarefas</h1>
            <input type="text" placeholder='Nome da tarefa' style={{ width: '300px', marginBottom: '10px', padding:'2px', outline:'none' }}/>
            <input type="text" placeholder='Descrição da tarefa' style={{ width: '300px', marginBottom: '10px', padding:'2px', outline:'none'}}/>

            <div className='buttons'>
            <input type="button" value="Cadastrar" className="btn btn-primary"/>
                <input type="button" value="Alterar" className='btn btn-warning'/>
                <input type="button" value="Remover" className='btn btn-danger'/>
                <input type="button" value="Cancelar" className='btn btn-secondary'/>
            </div>
            </div>
            <Tabela />
        </div>
        
    );
};

export default AdicionarTarefas;
