'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";


export default function Agendamento() {

    
    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
            <div className="table-responsive offset-md-3 col-md-6 text-center">
                <h2 className="display-4 fw-normal mb-3">Listagem de Agendamentos</h2>

                <form className="contact-form row mt-5">
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                        <label className="form-control" for="dataAgendamento">Data:</label>
                        <input type="date" name="data" placeholder="Insira sua senha" className="form-control rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                        <button className="btn btn-outline-primary btn-sm mr-2 mb-2">Buscar</button>
                    </div>
                </form>
                <table className="table table-striped table-bordered table-hover" >
                    <thead className="table-active">
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Horário Inicial</th>
                            <th scope="col">Horário Final</th>
                            <th scope="col">Procedimento</th>
                            <th scope="col">Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                            <tr>
                                <td>Maria</td>
                                <td>09:30</td>
                                <td>10:30</td>
                                <td>Mão completo</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm mr-2 mb-2">Excluir</button>
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </section>
        
        
    );

}
