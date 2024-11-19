'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import * as XLSX from 'xlsx';
import { PDFDocument, rgb } from 'pdf-lib';
import InputMask from "react-input-mask";

export default function Servico() {

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


    let nome = useRef("");
    let descricao = useRef("");
    let tempo = useRef(0);
    let valor = useRef(0);

    async function cadastrar() {
        
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


        let procedimento = {
            nome: nome.current.value,
            descricao: descricao.current.value,
            tempo: tempo.current.value,
            valor: valor.current.value,
        };

        try {
            const result = await httpClient.post("/procedimento", procedimento)
            console.log(result);
            
            nome.current.value = "";
            descricao.current.value = "";
            tempo.current.value = 0;
            valor.current.value = "0.00";
            alert("Procedimento cadastrado com sucesso!")
      
            let ok = r.status == 201;
      
        } catch (erro) {
            console.log(erro);
        }
    }

    async function excluirProcedimento(id) {

        if(confirm("Tem certeza que deseja excluir este procedimento?")) {
            try {
                const result = await httpClient.delete(`/procedimento/${id}`)
                carregarProcedimentos()
          
                let ok = r.status == 201;

          
            } catch (erro) {
                console.log(erro);
            }
            
        }
    }

    async function gerarExcel() {

        const ws = XLSX.utils.json_to_sheet(listaProcedimentos);
        const wb = XLSX.utils.book_new();
    
        XLSX.utils.book_append_sheet(wb, ws, 'Procedimentos');
        XLSX.writeFile(wb, 'relatorio_procedimentos.xlsx');
    }

    async function gerarPDF() {

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 400]);
        const { width, height } = page.getSize();
    
        // Adicionando título
        page.drawText('Relatório de Procedimentos', {
            x: 50,
            y: height - 50,
            size: 30,
            color: rgb(0, 0, 0),
        });
    
        // Adicionando os dados dos clientes
        listaProcedimentos.forEach((procedimento, index) => {
    
            const text = `${procedimento.nome} - R$ ${procedimento.valor} - Tempo(em min.):${procedimento.tempo}`;
            page.drawText(text, {
                x: 50,
                y: height - 100 - index * 20,
                size: 12,
                color: rgb(0, 0, 0),
            });
        });
    
        const pdfBytes = await pdfDoc.save();
        const blob = new Blob([pdfBytes], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
    
        // Fazendo o download do PDF
        const a = document.createElement('a');
        a.href = url;
        a.download = 'relatorio_procedimentos.pdf';
        a.click();
    }

    return(
        <div>
            <section id="appointment" className="jarallax" style={{backgroundImage: "url(../images/background-1.jpg)"}} >
            {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
                <div className="container-lg padding-medium">
                    <div className="offset-md-3 col-md-6 text-center ">

                        <h2 className="display-4 fw-normal mb-3">Cadastro</h2>

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

                        <button className="btn btn-primary mt-3" onClick={cadastrar} style={{backgroundColor: "DF808F", border: "none"}}>Cadastrar</button>
                    </div>
                </div>
                <div className="container-lg padding-medium">
                    <div className="section-title text-center mb-5">
                        <h2 className="display-4 fw-normal">Procedimentos e valores</h2>
                        <button onClick={gerarPDF} className="btn btn-outline-primary btn-sm mb-2">Gerar PDF</button>
                        <button onClick={gerarExcel} className="btn btn-outline-success btn-sm mb-2">Gerar Excel</button>
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
                                    <div>
                                        <div className="d-flex gap-4 w-100 justify-content-between">
                                            <h4 className="fw-semibold">{procedimento.nome}</h4>
                                            <h4 className="fw-semibold">R${procedimento.valor}</h4>
                                            <a className="btn btn-outline-secondary btn-sm mr-2 mb-2" href={`/admin/procedimento/alteracao/${procedimento.id}`}>Editar</a>
                                            <button className="btn btn-outline-danger btn-sm mr-2 mb-2" onClick={() => excluirProcedimento(procedimento.id)}>Excluir</button>
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
        </div>
        
    )
}