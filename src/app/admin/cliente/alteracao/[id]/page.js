'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../../../utils/httpClient.js";


export default function AlteracaoCliente({params: {id}}) {

    let [usuario, setUsuario] = useState(null);
    let nome = useRef("");
    let fone = useRef(0);
    let login = useRef("");
    let senha = useRef("");
    let confirmaSenha = useRef("");

    async function carregarUsuario(id) {

      try {
          const result = await httpClient.get(`/cliente/${id}`)
          setUsuario(result);
          nome.current.value = result.nome;
          fone.current.value = result.fone;
          login.current.value = result.login;
          senha.current.value = result.senha;
          confirmaSenha.current.value = result.confirmaSenha;

          let ok = r.status == 201;

      } catch (erro) {
      console.log(erro);
      }
    }

    useEffect(() => {
        carregarUsuario(id);
    }, [])

    async function alterar(){

      if(nome.current.value != "" && fone.current.value != 0 && login.current.value != "" && senha.current.value != "" && confirmaSenha.current.value != ""){
          usuario = {
              id: id,
              nome: nome.current.value,
              fone: fone.current.value,
              login: login.current.value,
              senha: senha.current.value,
              confirmaSenha: confirmaSenha.current.value,

          }

          try {
              const result = await httpClient.put("/cliente", usuario)
              console.log(result);
              
              nome.current.value = "";
              fone.current.value = 0;
              login.current.value = "";
              senha.current.value = "";
              confirmaSenha.current.value = "";
              alert("Cliente Alterado com sucesso!")
      
              let ok = r.status == 201;
      
          } catch (erro) {
          console.log(erro);
          }

      }

    }

  return(
      <section id="appointment" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}} >
      {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
        <div className="container-lg padding-medium">
          <div className="offset-md-3 col-md-6 text-center ">

            <h2 className="display-4 fw-normal mb-3">Alteração do cliente {id}</h2>

            <form className="contact-form row mt-5">
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" ref={nome} placeholder="Nome completo" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="number" ref={fone} placeholder="00 00000-0000" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" ref={login} placeholder="Cadastre um login" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="password" ref={senha} placeholder="Cadastre sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                <input type="password" ref={confirmaSenha} placeholder="Confirme sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
            </form>

            <button className="btn btn-primary mt-3" onClick={alterar} style={{backgroundColor: "DF808F", border: "none"}}>Alterar</button>
          </div>

        </div>
      </section>
  );

}