'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../utils/httpClient.js";
import { AuthProvider, useAuth } from "../context/userContext.js";
import * as XLSX from 'xlsx';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import styles from "../page.module.css";
import { useRouter } from "next/navigation";

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
    
          await carregarProcedimentos();
    
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
      const page = pdfDoc.addPage([600, 800]);
      const { width, height } = page.getSize();
      const fontSize = 12; 
      const margin = 50; 
      const lineHeight = fontSize + 10; 
      const columnWidths = [300, 100, 100];
      const bgColor = rgb(0.87, 0.5, 0.56);
      const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
      const rowColor1 = rgb(1, 0.85, 0.9); // Cor rosa claro para as linhas ímpares 
      const rowColor2 = rgb(1, 0.75, 0.8);
  
      // Adicionando título
      const title = 'Relatório de Procedimentos'; 
      const titleFontSize = 20; 
      const titleWidth = fontBold.widthOfTextAtSize(title, titleFontSize); 
      const titleX = (width - titleWidth) / 2;

      page.drawText(title, {
          x: titleX,
          y: height - margin - titleFontSize,
          size: titleFontSize,
          color: rgb(0, 0, 0),
          font: fontBold,
      });

      page.drawRectangle({ 
          x: margin, 
          y: height - margin - 2.2 * lineHeight - 2, 
          width: columnWidths.reduce((a, b) => a + b, 0), 
          height: lineHeight + 4, 
          color: bgColor, 
      });

      const headers = ['NOME', 'VALOR', 'TEMPO']; 
      headers.forEach((header, i) => { 
          page.drawText(header, { 
              x: margin + (i > 0 ? columnWidths.slice(0, i).reduce((a, b) => a + b, 0) : 0), 
              y: height - margin - 2 * lineHeight, 
              size: fontSize, color: rgb(0, 0, 0), 
              font: fontBold,
          }); 
      });
  
      // Adicionando os dados dos clientes
      listaProcedimentos.forEach((procedimento, index) => { 
          const y = height - margin - (index + 3) * lineHeight; // Ajustando o espaçamento vertical 
          const bgColor = index % 2 === 0 ? rowColor1 : rowColor2; // Alternar entre as cores de fundo 
          // Adicionando fundo colorido para as linhas 
          page.drawRectangle({ 
              x: margin, 
              y: y - 12, 
              width: columnWidths.reduce((a, b) => a + b, 0), 
              height: lineHeight + 4, color: bgColor, 
          });

          const dados = [ procedimento.nome, `R$ ${parseFloat(procedimento.valor).toLocaleString('pt-BR', { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2 
          })}`, `${procedimento.tempo.toString()}min.`, ]; 
          dados.forEach((dado, i) => { 
              page.drawText(dado, { 
                  x: margin + (i > 0 ? columnWidths.slice(0, i).reduce((a, b) => a + b, 0) : 0),
                  y: y, 
                  size: fontSize, 
                  color: rgb(0, 0, 0), 
              }); 
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

  const {user} = useAuth();
  const { logout } = useAuth();
  let router = useRouter();

  const handleLogout = async () => {
    if(user != null){
      router.push('/');
      logout()
      alert("Você não está mais logado")
      router.push('/');
    }
    else{
        alert("Você ainda não fez o login!");
    }

  }

  return (
    <div>
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(../images/background-1.jpg)"}} >
            <div className="d-flex justify-content-end p-3">
                <button className="btn btn-primary mt-3" style={{backgroundColor: "green", border: "none"}}>Ajuda</button>
                <button className="btn btn-primary mt-3" onClick={handleLogout}  style={{backgroundColor: "maroon", border: "none"}}>Sair</button>
            </div>
            <div className="container-lg padding-medium">
                <div className="offset-md-3 col-md-6 text-center ">

                    <h2 className="display-4 fw-normal mb-3">Cadastro de Procedimentos</h2>

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
                                <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-cente">
                                        <h4 className="fw-semibold">{procedimento.nome}</h4>
                                        <h4 className="fw-semibold ms-auto"> {/* Adicionando ms-auto para empurrar para a direita */}
                                            R${(parseFloat(procedimento.valor)).toLocaleString('pt-BR', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                                        </h4>
                                    </div>
                                    <p className="mb-0 opacity-75">{procedimento.descricao}</p>
                                    <p className="mb-0 opacity-75">Tempo: {procedimento.tempo} minutos</p>
                                    <div className="d-flex justify-content-end mt-2"> {/* Alinhando os botões à direita */}
                                        <a className="btn btn-outline-secondary btn-sm me-2" href={`/admin/procedimento/alteracao/${procedimento.id}`}>Editar</a>
                                        <button className="btn btn-outline-danger btn-sm" onClick={() => excluirProcedimento(procedimento.id)}>Excluir</button>
                                    </div>
                                </div>
                                </a>
                            ))}
                            </div>
                        </div>
                    </div>
                
                
            </div>
        </section>
    </div>
    
  );
}