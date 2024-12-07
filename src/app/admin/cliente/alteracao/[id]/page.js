'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../../../utils/httpClient.js";
import { useRouter } from "next/navigation";
import InputMask from "react-input-mask";


export default function AlteracaoCliente({params: {id}}) {

    let router = useRouter();
    let [usuario, setUsuario] = useState(null);
    let nome = useRef("");
    let fone = useRef(0);
    let login = useRef("");
    let senha = useRef("");
    let confirmaSenha = useRef("");

    const [senhasVisiveis, setSenhasVisiveis] = useState(false);

    async function carregarUsuario(id) {
      
      try {
          const result = await httpClient.get(`/cliente/${id}`)
          setUsuario(result);
          nome.current.value = result.nome;
          fone.current.value = result.fone;
          login.current.value = result.login;
          senha.current.value = result.senha;

          let ok = r.status == 201;

      } catch (erro) {
      console.log(erro);
      }
      
    }

    useEffect(() => {
        carregarUsuario(id);
    }, [])

    async function alterar(){

      let errors = [];

      // Validação do nome
      if (!nome.current.value.trim()) {
        errors.push("O nome é obrigatório.");
      } else if (!nome.current.value.includes(' ')) {
        errors.push("O nome deve conter pelo menos um espaço para nome e sobrenome.");
      }

      // Validação do telefone
      if (!fone.current.value) {
        errors.push("O telefone é obrigatório.");
      }

      // Validação do login
      if (!login.current.value.trim()) {
        errors.push("O login é obrigatório.");
      } else if (login.current.value.length < 6) {
        errors.push("O login deve ter pelo menos 6 caracteres.");
      }

      // Validação da senha
      if (!senha.current.value.trim()) {
        errors.push("A senha é obrigatória.");
      } else if (senha.current.value.length < 6) {
        errors.push("A senha deve ter pelo menos 6 caracteres.");
      }

      // Validação da confirmação da senha
      if (senha.current.value !== confirmaSenha.current.value) {
        errors.push("A confirmação da senha não coincide com a senha.");
      }

      // Se houver erros, exiba-os e não continue com o cadastro
      if (errors.length > 0) {
        alert(errors.join("\n")); 
        return;
      }

      if(nome.current.value != "" && fone.current.value != 0 && login.current.value != "" && senha.current.value != ""){
          usuario = {
              id: id,
              nome: nome.current.value,
              fone: fone.current.value,
              login: login.current.value,
              senha: senha.current.value,

          }

          try {
            const result = await httpClient.put("/cliente", usuario)
            console.log(result);
            
            alert("Cliente Alterado com sucesso!")
          
            router.push("/admin/cliente");
            let ok = r.status == 201;
    
          } catch (erro) {
          console.log(erro);
          }

      }

    }

  return(
      <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../../images/background-1.jpg)"}} >
        <div className="container-lg padding-medium">
          <div className="offset-md-3 col-md-6 text-center ">

            <h2 className="display-4 fw-normal mb-3">Alteração do cliente {id}</h2>

            <form className="contact-form row mt-5">
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" ref={nome} placeholder="Nome completo" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <InputMask type="text" ref={fone} mask="(**) *****-****" maskChar={null} className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type="text" ref={login} placeholder="Cadastre um login" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
              </div>
              <div className="form-input col-lg-12 d-md-flex mb-3">
                <input type={senhasVisiveis ? "text" : "password"} ref={senha} placeholder="Cadastre sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                <input type={senhasVisiveis ? "text" : "password"} ref={confirmaSenha} placeholder="Confirme sua senha" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                <button type="button" onClick={() => setSenhasVisiveis(!senhasVisiveis)} className="btn btn-light btn-sm mr-2 mb-2">{senhasVisiveis ? "Ocultar" : "Mostrar"}</button>
              </div>
            </form>

            <button className="btn btn-primary mt-3" onClick={alterar} style={{backgroundColor: "DF808F", border: "none"}}>Alterar</button>
          </div>

        </div>
      </section>
  );

}