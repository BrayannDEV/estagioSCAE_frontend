'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../utils/httpClient.js";

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

    return(
        <section id="price" className="jarallax" style={{backgroundImage: "url(images/background-2.jpg)"}}>
        {/* "background-image: url(images/background-2.jpg); background-size: cover; background-repeat: no-repeat; background-position: center;" */}
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
                                    <h2 className="fw-semibold">R${procedimento.valor}</h2>
                                </div>
                                <p className="mb-0 opacity-75">{procedimento.descricao}</p>
                                <p className="mb-0 opacity-75">Tempo: {procedimento.tempo} minutos</p>
                            </div>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}