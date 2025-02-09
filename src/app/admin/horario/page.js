'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import InputMask from "react-input-mask";
import { useAuth } from "../../context/userContext.js";
import { useRouter } from "next/navigation";

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
    
          await carregarHorarios();
    
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

    function handleDownloadPDF() { 
      const pdfUrl = '/manualUsuario.pdf'; 
      const link = document.createElement('a'); 
      link.href = pdfUrl; 
      link.download = 'manualUsuario.pdf'; 
      document.body.appendChild(link); 
      link.click(); 
      document.body.removeChild(link); 
    }

    const {user} = useAuth();
    const { logout } = useAuth();
    let router = useRouter();
    
    const handleLogout = async () => {
        if(user != null){
        logout()
        alert("Você não está mais logado")
        router.push('/login');
        }
        else{
            alert("Você ainda não fez o login!");
        }
    }

    return(
        <div>
          <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
            <div className="d-flex justify-content-end p-3">
                <button className="btn btn-primary mt-3" onClick={handleDownloadPDF} style={{backgroundColor: "green", border: "none"}}>Ajuda</button>
                <button className="btn btn-primary mt-3" onClick={handleLogout}  style={{backgroundColor: "maroon", border: "none"}}>Sair</button>
            </div>
            <div className="container-lg padding-medium">
              <div className="offset-md-3 col-md-6 text-center ">
    
                <h2 className="display-4 fw-normal mb-3">Cadastro de Horarios</h2>
    
                <form className="contact-form row mt-5">
                  <div className="form-input col-lg-12 d-md-flex mb-3">
                    <label className="form-control rounded-0 border-0 py-3 mb-2 me-3" for="diaSemana">Dia da semana</label>
                    <select type="text" ref={diaSemana} id="diaSemana" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3">
                      <option value="Domingo">Domingo</option>
                      <option value="Segunda-feira">Segunda-feira</option>
                      <option value="Terca-feira">Terça-feira</option>
                      <option value="Quarta-feira">Quarta-feira</option>
                      <option value="Quinta-feira">Quinta-feira</option>
                      <option value="Sexta-feira">Sexta-feira</option>
                      <option value="Sabado">Sábado</option>
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
                    return <tr key={value.id}>
                        <td>{value.diaSemana}</td>
                        <td>{value.horaInicial}</td>
                        <td>{value.horaFinal}</td>
                        <td>
                            <button className="btn btn-outline-danger btn-sm mr-2 mb-2" onClick={() => excluirHorario(value.id)}>Excluir</button>
                        </td>
                    </tr> 
                  })}
              </tbody>
              </table>

          </div>
          </section>
        </div>
    );
}