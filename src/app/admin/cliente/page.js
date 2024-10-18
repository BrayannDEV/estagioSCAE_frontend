'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";


export default function Cliente() {

    let [listaClientes, setListaClientes] = useState([]);
    useEffect((e) => {
        carregarClientes();
    }, [])

    async function carregarClientes() {
        
        try {
            const result = await httpClient.get("/cliente")
            setListaClientes(result)
      
            let ok = r.status == 201;
      
        } catch (erro) {
            console.log(erro);
        }
    }

    async function excluirCliente(id) {

        if(confirm("Tem certeza que deseja excluir este usuário?")) {
            try {
                const result = await httpClient.delete(`/cliente/${id}`)
                carregarClientes()
          
                let ok = r.status == 201;

          
            } catch (erro) {
                console.log(erro);
            }
            
        }
    }

    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(../images/background-1.jpg)"}} >
        {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
        <div className="table-responsive offset-md-3 col-md-6 text-center">
            <h2 className="display-4 fw-normal mb-3">Listagem de cliente</h2>


            <table className="table table-striped table-bordered table-hover" >
            <thead className="table-active">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Login</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {listaClientes.map(cliente => (
                    <tr key={cliente.id}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.fone}</td>
                        <td>{cliente.login}</td>
                        <td>
                            <a className="btn btn-outline-secondary btn-sm mr-2 mb-2" href="/admin/cliente/alteracao">Editar</a>
                            <button className="btn btn-outline-danger btn-sm mr-2 mb-2" onClick={() => excluirCliente(cliente.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>

        </div>
        </section>


    );

}