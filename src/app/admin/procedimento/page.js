'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";

export default function Servico() {

    let [listaProcedimentos, setListaProcedimentos] = useState([]);
    useEffect((e) => {
        carregarProcedimentos();
    }, [])

    async function carregarProcedimentos() {
        
        try {
            const result = await httpClient.get("/procedimento")
            setListaProcedimentos(result)
      
            let ok = r.status == 201;
      
        } catch (erro) {
            console.log(erro);
        }
    }


    let nome = useRef("");
    let descricao = useRef("");
    let tempo = useRef(0);
    let valor = useRef(0);

    async function cadastrar() {
        
        let procedimento = {
            nome: nome.current.value,
            descricao: descricao.current.value,
            tempo: tempo.current.value,
            valor: valor.current.value,
        };

        try {
            const result = await httpClient.post("/procedimento", procedimento)
            console.log(result);
            
            nome.current.value = "";
            descricao.current.value = "";
            tempo.current.value = 0;
            valor.current.value = 0;
            alert("Procedimento cadastrado com sucesso!")
      
            let ok = r.status == 201;
      
        } catch (erro) {
            console.log(erro);
        }
    }

    async function excluirProcedimento(id) {

        if(confirm("Tem certeza que deseja excluir este procedimento?")) {
            try {
                const result = await httpClient.delete(`/procedimento/${id}`)
                carregarProcedimentos()
          
                let ok = r.status == 201;

          
            } catch (erro) {
                console.log(erro);
            }
            
        }
    }

    return(
        <div>
            <section id="appointment" className="jarallax" style={{backgroundImage: "url(../images/background-1.jpg)"}} >
            {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
                <div className="container-lg padding-medium">
                    <div className="offset-md-3 col-md-6 text-center ">

                        <h2 className="display-4 fw-normal mb-3">Cadastro</h2>

                        <form className="contact-form row mt-5">
                        <div className="form-input col-lg-12 d-md-flex mb-3">
                            <input type="text" ref={nome} placeholder="Nome do procedimento" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                        </div>
                        <div className="form-input col-lg-12 d-md-flex mb-3">
                            <input type="text" ref={descricao} placeholder="Descrição" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                        </div>
                        <div className="form-input col-lg-12 d-md-flex mb-3">
                            <input type="number" ref={tempo} placeholder="Tempo em minutos" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                            <input type="float" ref={valor} placeholder="valor" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                        </div>
                        </form>

                        <button className="btn btn-primary mt-3" onClick={cadastrar} style={{backgroundColor: "DF808F", border: "none"}}>Cadastrar</button>
                    </div>
                </div>
                <div className="container-lg padding-medium">
                    <div className="section-title text-center mb-5">
                        <h2 className="display-4 fw-normal">Procedimentos e valores</h2>
                    </div>

                        <div className="col-md-8 mx-auto my-2">
                            <div className="bg-white p-2 p-lg-5">
                                <div className="list-group rounded-0">
                                {listaProcedimentos.map(procedimento => (
                                    <a href="#"
                                    className="border-0 list-group-item list-group-item-action d-lg-flex align-items-center gap-4 py-3"
                                    aria-current="true">
                                    <img src="../images/service-img4.jpg" alt="twbs" width="100" height="100"
                                        className="rounded-circle flex-shrink-0 mb-4"/>
                                    <div>
                                        <div className="d-flex gap-4 w-100 justify-content-between">
                                            <h4 className="fw-semibold">{procedimento.nome}</h4>
                                            <h4 className="fw-semibold">R${procedimento.valor}</h4>
                                            <button className="btn btn-outline-secondary btn-sm mr-2 mb-2">Editar</button>
                                            <button className="btn btn-outline-danger btn-sm mr-2 mb-2" onClick={() => excluirProcedimento(procedimento.id)}>Excluir</button>
                                        </div>
                                        <p className="mb-0 opacity-75">{procedimento.descricao}</p>
                                    </div>
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    
                    
                </div>
            </section>
        </div>
        
    )
}