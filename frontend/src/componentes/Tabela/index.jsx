const Tabela = ({vetor}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
        <tbody>
                  {
                vetor.map((obj, indice) => (
                    <tr key={indice}>
                        <td>{indice+1}</td>
                        <td>{obj.tarefa}</td>
                        <td>{obj.descricao}</td>
                        <td><button className="btn btn-success">Selecionar</button></td>
                    </tr>
                ))
               }
        </tbody>
        </table>
    )
}

export default Tabela;