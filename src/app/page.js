'use client'
import { useState, useEffect } from "react"
import httpClient from "./utils/httpClient.js";
import { useAuth } from "./context/userContext.js";

export default function Home() {

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

  const {user} = useAuth();
  const { logout } = useAuth();

  const handleLogout = async () => {
    if(user != null){
      logout()
      alert("Você não está mais logado")    
    }
    else{
        alert("Você ainda não fez o login!");
    }

  }

  return (
    <section id="services" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}}>
      <div className="d-flex justify-content-end p-3">
        <button className="btn btn-primary mt-3" onClick={handleLogout}  style={{backgroundColor: "maroon", border: "none"}}>Sair</button>
      </div>
    
      <div className="container-lg padding-medium">

        <div className="text-center">
          <a className="btn btn-primary mt-5" style={{backgroundColor: "DF808F", border: "none", marginBottom: 100}} href="/agendamento">Agende seu horário</a>
        </div>

        
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
                <div className="w-100">
                    <div className="d-flex gap-4 w-100 justify-content-between">
                        <h4 className="fw-semibold">{procedimento.nome}</h4>
                        <h2 className="fw-semibold text-right">
                          R${(parseFloat(procedimento.valor)).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </h2>
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
  );
}
