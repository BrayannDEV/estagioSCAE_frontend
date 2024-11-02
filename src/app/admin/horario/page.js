'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import InputMask from "react-input-mask";

export default function Horario() {

    let diaSemana = useRef("");
    let horaInicial = useRef("");
    let horaFinal = useRef("");

    async function cadastrar(){
    
        let horario = {
          diaSemana: diaSemana.current.value,
          horaInicial: horaInicial.current.value,
          horaFinal: horaFinal.current.value,
        };
    
        try {
          const result = await httpClient.post("/horario", horario)
          console.log(result);
          
          diaSemana.current.value = "";
          horaInicial.current.value = "";
          horaFinal.current.value = "";
          alert("Cadastrado com sucesso!")
    
          let ok = r.status == 201;
    
        } catch (erro) {
          console.log(erro);
        }
    
    }

    let [listaHorarios, setListaHorarios] = useState([]);
    useEffect((e) => {
      carregarHorarios();
    }, [])

    async function carregarHorarios() {
        
        try {
          const result = await httpClient.get(`/horario`)
          setListaHorarios(result)
    
          let ok = r.status == 201;
      
        }catch (erro) {
          console.log(erro);
        }
    }

    async function excluirHorario(id) {

      if(confirm("Tem certeza que deseja excluir este horário?")) {
          try {
            const result = await httpClient.delete(`/horario/${id}`)
            carregarHorarios()
      
            let ok = r.status == 201;

          }catch (erro) {
            console.log(erro);
          }
      }
  }

    return(
        <div>
          <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
            <div className="container-lg padding-medium">
              <div className="offset-md-3 col-md-6 text-center ">
    
                <h2 className="display-4 fw-normal mb-3">Cadastro de Horarios</h2>
    
                <form className="contact-form row mt-5">
                  <div className="form-input col-lg-12 d-md-flex mb-3">
                    <input type="text" ref={diaSemana} placeholder="Coloque o dia da semana" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                  </div>
                  <div className="form-input col-lg-12 d-md-flex mb-3">
                    <input type="time" ref={horaInicial} placeholder="hora inicial" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                  </div>
                  <div className="form-input col-lg-12 d-md-flex mb-3">
                    <input type="time" ref={horaFinal} placeholder="hora final" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                  </div>
                </form>
                <button className="btn btn-primary mt-3" onClick={cadastrar} style={{backgroundColor: "DF808F", border: "none"}}>Cadastrar</button>
              </div>
    
            </div>
          </section>
          <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
          <div className="table-responsive offset-md-3 col-md-6 text-center">
              <h2 className="display-4 fw-normal mb-3">Listagem de horários</h2>

              <table className="table table-striped table-bordered table-hover" >
              <thead className="table-active">
                  <tr>
                      <th colSpan="2">Segunda-feira</th>
                      <th scope="col">Ação</th>
                  </tr>
              </thead>
              <tbody>
                  {listaHorarios.map(horario => (

                      <tr key={horario.id}>
                          <td>{horario.horaInicial}</td>
                          <td>{horario.horaFinal}</td>
                          <td>
                              <button className="btn btn-outline-danger btn-sm mr-2 mb-2" onClick={() => excluirHorario(horario.id)}>Excluir</button>
                          </td>
                      </tr>
                  ))}
              </tbody>
              </table>

          </div>
          </section>
        </div>
    );
}