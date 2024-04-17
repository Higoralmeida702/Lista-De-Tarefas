package com.higor.listadetarefas.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.higor.listadetarefas.Entity.RespostaModelo;
import com.higor.listadetarefas.Entity.Tarefas;
import com.higor.listadetarefas.Repository.TarefasRepository;

@Service
public class TarefasService {

    @Autowired
    private TarefasRepository tr;

    @Autowired
    private RespostaModelo rm;

    public Iterable<Tarefas> listar() {
        return tr.findAll();
    }

    public ResponseEntity<?> cadastrarAlterar(Tarefas tarefas, String acao) {

        if (tarefas.getTarefa().equals("")) {
            rm.setMensagem("O nome da tarefa é obrigatorio");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (tarefas.getDescricao().equals("")) {
            rm.setMensagem("a descrição da tarefa é obrigatorio");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else {
            if (acao.equals("cadastrar")) {
                return new ResponseEntity<Tarefas>(tr.save(tarefas), HttpStatus.CREATED);
            } else {
                return new ResponseEntity<Tarefas>(tr.save(tarefas), HttpStatus.OK);
            }
        }
    }

    public ResponseEntity<RespostaModelo> remover(Long id) {

        tr.deleteById(id);
        rm.setMensagem("a tarefa foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }
}
