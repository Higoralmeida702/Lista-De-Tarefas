package com.higor.listadetarefas.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.higor.listadetarefas.Entity.Tarefas;

public interface TarefasRepository extends JpaRepository<Tarefas, Long> {
}
