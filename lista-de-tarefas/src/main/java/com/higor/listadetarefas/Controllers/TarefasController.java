package com.higor.listadetarefas.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.higor.listadetarefas.Entity.RespostaModelo;
import com.higor.listadetarefas.Entity.Tarefas;
import com.higor.listadetarefas.Services.TarefasService;

@RestController
public class TarefasController {

    @Autowired
    private TarefasService ts;

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable Long id) {
        return ts.remover(id);
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody Tarefas tr) {
        return ts.cadastrarAlterar(tr, "alterar");
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Tarefas tr) {
        return ts.cadastrarAlterar(tr, "cadastrar");
    }

    @GetMapping("/listar")
    public Iterable<Tarefas> listar() {
        return ts.listar();
    }

    @GetMapping("/")
    public String rota() {
        return "API de produtos funcionando";
    }

}
