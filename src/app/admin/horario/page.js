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
          alert(erro);
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

    function ordenarHorarios(horarios) { 
      const ordemDias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]; 
      return horarios.sort((a, b) => { 
        const diaA = ordemDias.indexOf(a.diaSemana); 
        const diaB = ordemDias.indexOf(b.diaSemana); 
        if (diaA !== diaB) { 
          return diaA - diaB;
        } 
        const horaA = new Date(`1970-01-01T${a.horaInicial}:00`); 
        const horaB = new Date(`1970-01-01T${b.horaInicial}:00`); 
        return horaA - horaB; 
      }); 
    }

    return(
        <div>
          <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
            <div className="container-lg padding-medium">
              <div className="offset-md-3 col-md-6 text-center ">
    
                <h2 className="display-4 fw-normal mb-3">Cadastro de Horarios</h2>
    
                <form className="contact-form row mt-5">
                  <div className="form-input col-lg-12 d-md-flex mb-3">
                    <label className="form-control rounded-0 border-0 py-3 mb-2 me-3" for="diaSemana">Dia da semana</label>
                    <select type="text" ref={diaSemana} id="diaSemana" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3">
                    {/* <datalist id="dias"> */}
                      <option value="Domingo">Domingo</option>
                      <option value="Segunda-feira">Segunda-feira</option>
                      <option value="Terca-feira">Terça-feira</option>
                      <option value="Quarta-feira">Quarta-feira</option>
                      <option value="Quinta-feira">Quinta-feira</option>
                      <option value="Sexta-feira">Sexta-feira</option>
                      <option value="Sabado">Sábado</option>
                    {/* </datalist> */}
                    </select>
                  </div>
                  <div className="form-input col-lg-12 d-md-flex mb-3">
                    <label className="form-control rounded-0 border-0 py-3 mb-2 me-3" for="horaInicial">Horario Inicial:</label>
                    <input type="time" ref={horaInicial} placeholder="hora inicial" id="horaInicial" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                  </div>
                  <div className="form-input col-lg-12 d-md-flex mb-3">
                    <label className="form-control rounded-0 border-0 py-3 mb-2 me-3" for="horaFinal">Horario Final:</label>
                    <input type="time" ref={horaFinal} placeholder="hora final" id="horaFinal" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
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
                      <th scope="col">Dia da semana</th>
                      <th scope="col">Horário Inicial</th>
                      <th scope="col">Horário Final</th>
                      <th scope="col">Ação</th>
                  </tr>
              </thead>
              <tbody>
                  {listaHorarios.map(function(value, index) {
                    console.log(value)
                    //if(value.diaSemana == "Segunda-feira"){
                      return <tr key={value.id}>
                          <td>{value.diaSemana}</td>
                          <td>{value.horaInicial}</td>
                          <td>{value.horaFinal}</td>
                          <td>
                              <button className="btn btn-outline-danger btn-sm mr-2 mb-2" onClick={() => excluirHorario(value.id)}>Excluir</button>
                          </td>
                      </tr>
                    //}
                      
                  })}
              </tbody>
              </table>

          </div>
          </section>
        </div>
    );
}