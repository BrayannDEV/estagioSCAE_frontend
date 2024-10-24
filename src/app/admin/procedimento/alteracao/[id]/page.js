'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../../../utils/httpClient.js";
import { useRouter } from "next/navigation";


export default function AlteracaoProcedimento({params: {id}}) {

    let router = useRouter();
    let [procedimento, setProcedimento] = useState(null);
    let nome = useRef("");
    let descricao = useRef("");
    let tempo = useRef(0);
    let valor = useRef(0);

    async function carregarProcedimento(id) {

      try {
          const result = await httpClient.get(`/procedimento/${id}`)
          setProcedimento(result);
          nome.current.value = result.nome;
          descricao.current.value = result.descricao;
          tempo.current.value = result.tempo;
          valor.current.value = result.valor;

          let ok = r.status == 201;

      } catch (erro) {
      console.log(erro);
      }
    }

    useEffect(() => {
        carregarProcedimento(id);
    }, [])

    async function alterar(){

        let errors = [];

        // Validação do valor
        if (!nome.current.value.trim()) {
        errors.push("O nome é obrigatório.");
        }

        // Validação do tempo
        if (!tempo.current.value.trim()) {
        errors.push("Insira o tempo do procedimento.");
        }

        if (!valor.current.value.trim()) {
            errors.push("O valor é obrigatório.");
        } else if (!/^\d+(\.\d{1,2})?$/.test(valor.current.value)) {
            errors.push("O valor deve conter apenas números e um ponto (.) como separador decimal, se necessário.");
        }

        // Se houver erros, exiba-os e não continue com o cadastro
        if (errors.length > 0) {
            alert(errors.join("\n"));
            return;
        }

        if(nome.current.value != "" && descricao.current.value != "" && tempo.current.value != 0 && valor.current.value != 0){
            procedimento = {
                id: id,
                nome: nome.current.value,
                descricao: descricao.current.value,
                tempo: tempo.current.value,
                valor: valor.current.value,
            }

            try {
                const result = await httpClient.put("/procedimento", procedimento)
                console.log(result);
                
                alert("Procedimento Alterado com sucesso!")
            
                router.push("/admin/procedimento");
                let ok = r.status == 201;
        
            } catch (erro) {
            console.log(erro);
            }

        }

    }

  return(
    <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../../images/background-1.jpg)"}} >
    {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
        <div className="container-lg padding-medium">
            <div className="offset-md-3 col-md-6 text-center ">

                <h2 className="display-4 fw-normal mb-3">Alteração do procedimento {id}</h2>

                <form className="contact-form row mt-5">
                <div className="form-input col-lg-12 d-md-flex mb-3">
                    <input type="text" ref={nome} placeholder="Nome do procedimento" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div className="form-input col-lg-12 d-md-flex mb-3">
                    <input type="text" ref={descricao} placeholder="Descrição" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                <div className="form-input col-lg-12 d-md-flex mb-3">
                    <input type="number" ref={tempo} placeholder="Tempo em minutos" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                    <input type="text" ref={valor} placeholder="valor" className="form-control w-100 rounded-0 border-0 ps-4 py-3 mb-2 me-3"/>
                </div>
                </form>

                <button className="btn btn-primary mt-3" onClick={alterar} style={{backgroundColor: "DF808F", border: "none"}}>Alterar</button>
            </div>
        </div>
    </section>
  );

}