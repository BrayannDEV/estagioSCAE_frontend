'use client'
import { useRef, useState } from "react"
import httpClient from "../utils/httpClient";

export default function Gravar() {

  let nome = useRef("");
  let fone = useRef(0);
  let login = useRef("");
  let senha = useRef("");
  let confirmaSenha = useRef("");

  async function cadastrar(){
    let senhaCorreta;
    if(senha.current.value == confirmaSenha.current.value){
      senhaCorreta = senha.current.value;
    }
    let usuario = [{
      nome: nome.current.value,
      fone: fone.current.value,
      login: login.current.value,
      senha: senhaCorreta,
    }];

    try {
      const result = await httpClient.post("/cliente", usuario)
      console.log(result);
    } catch (erro) {
      console.log(erro);
    }

    // httpClient.post("/cliente", usuario)
    // .then(r=> {
    //     ok = r.status == 201;
    //     return r.json();
    // })
    // .then(r=> {
    //     if(ok) {
    //         alert(r.msg);

    //         nome.current.value = "";
    //         fone.current.value = 0;
    //         login.current.value = "";
    //         senha.current.value = "";
    //         confirmaSenha.current.value = "";
    //     }
    //     else {
    //         alert(r.msg);
    //     }
    // })
  }

  return(
      <section id="appointment" className="jarallax" style={{backgroundImage: "url(images/background-1.jpg)"}} >
      {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
        <div className="container-lg padding-medium">
          <div className="offset-md-3 col-md-6 text-center ">

            <h2 className="display-4 fw-normal mb-3">Cadastro</h2>

            <form className="contact-form row mt-5">
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" ref={nome} placeholder="Nome completo" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="number" ref={fone} placeholder="Numero de telefone" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" ref={login} placeholder="Cadastre um login" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="password" ref={senha} placeholder="Cadastre sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                <input type="password" ref={confirmaSenha} placeholder="Confirme sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
            </form>

            <button className="btn btn-primary mt-3" onClick={cadastrar} style={{backgroundColor: "DF808F", border: "none"}}>Cadastrar</button>
          </div>

        </div>
      </section>
  );

}