'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import Select from 'react-select';

export default function Agendamento() {
    
    let data = useRef("");
    let horaInicial = useRef("");
    let cliente = useRef("");
    let procedimento = useRef("");
    let [clienteSelecionado, setClienteSelecionado] = useState(null);

    async function cadastrar(){
    
        
        let procedimentoSelecionado = listaProcedimentos.find(p => p.id == procedimento.current.value);
        if (procedimentoSelecionado) {

            //Convertendo o tempo do procedimento para horas e somando com a hora inicial para virar a hora final
            let minutosTotal = parseInt(procedimentoSelecionado.tempo, 10);
            let horas = Math.floor(minutosTotal / 60);
            let minutos = minutosTotal % 60;
            let [horaInicialHoras, horaInicialMinutos] = horaInicial.current.value.split(":").map(Number);
            let horaFinalDate = new Date();
            horaFinalDate.setHours(horaInicialHoras + horas);
            horaFinalDate.setMinutes(horaInicialMinutos + minutos);
            let horaFinal = horaFinalDate.toTimeString().slice(0, 5);

            let agenda = {
            data: data.current.value,
            horaInicial: horaInicial.current.value,
            horaFinal: horaFinal,
            cliente: clienteSelecionado ? clienteSelecionado.value : null,
            procedimento: procedimento.current.value,
            };
        
            try {
                
            const result = await httpClient.post("/agenda", agenda)
            console.log("agenda", agenda);

            let ok = result.status == 201;
            
            data.current.value = "";
            horaInicial.current.value = "";
            setClienteSelecionado(null);
            procedimento.current.value = "";
            alert("Cadastrado com sucesso!")
        
            } catch (erro) {
                console.log(erro);
                alert(erro);
            }
        } else {
            console.log("Procedimento não encontrado"); alert("Procedimento não encontrado"); 
        }
    }

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


    let [listaCliente, setListaCliente] = useState([]);
    useEffect((e) => {
        carregarCliente();
    }, [])

    async function carregarCliente() {
        
        try {
            const result = await httpClient.get("/cliente")
            setListaCliente(result)
      
            let ok = r.status == 201;
      
        } catch (erro) {
            console.log(erro);
        }
    }


    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
            <div className="d-flex justify-content-end p-3">
                <button className="btn btn-primary mt-3" style={{backgroundColor: "green", border: "none"}}>Ajuda</button>
                <button className="btn btn-primary mt-3" style={{backgroundColor: "maroon", border: "none"}}>Sair</button>
            </div>
            <div className="container-lg padding-medium">
                <div className="offset-md-3 col-md-6 text-center ">

                <h2 className="display-4 fw-normal mb-3">Agendar</h2>

                <form className="contact-form row mt-5">
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                    <label className=" rounded-0 border-0 py-3 mb-2 me-3" for="procedimento">Procedimentos: </label>
                        <select type="text" ref={procedimento} id="procedimento" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3">
                        {listaProcedimentos.map(procedimento => (<option value={procedimento.id}>{procedimento.nome}</option>))}
                        </select>
                    </div>
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                    <label className=" rounded-0 border-0 py-3 mb-2 me-3" for="cliente">Cliente: </label>
                    <Select 
                        value={clienteSelecionado} 
                        onChange={setClienteSelecionado} 
                        options={listaCliente.map(cliente => 
                            ({ value: cliente.id, label: cliente.nome }))
                        } className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3" 
                        placeholder="Digite para buscar clientes..." />
                    </div>
                    <div className="form-input col-lg-12 d-md-flex mb-3">
                    <input type="date" ref={data} name="data" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                    <input type="time" ref={horaInicial} name="hora" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                    </div>
                </form>

                <button className="btn btn-primary mt-3" onClick={cadastrar} style={{backgroundColor: "DF808F", border: "none"}}>Confirmar</button>
                </div>

            </div>
        </section>
        
        
    );

}
