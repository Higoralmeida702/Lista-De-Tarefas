import React from 'react';
import './AdicionarTarefas.css';

const AdicionarTarefas = ({ botao }) => {
    
    return (    
        <div>
            <div className='adicionarTarefas'>
                <h1>Adicionar Tarefas</h1>
                <input type="text" placeholder='Nome da tarefa' style={{ width: '300px', marginBottom: '10px', padding:'2px', outline:'none' }}/>
                <input type="text" placeholder='Descrição da tarefa' style={{ width: '300px', marginBottom: '10px', padding:'2px', outline:'none'}}/>

                {botao ? (
                    <input type="button" value="Cadastrar" className="btn btn-primary"/>
                ) : (
                    <div className='buttons'>
                        <input type="button" value="Alterar" className='btn btn-warning'/>
                        <input type="button" value="Cancelar" className='btn btn-secondary'/>
                        <input type="button" value="Remover" className='btn btn-danger'/>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdicionarTarefas;
