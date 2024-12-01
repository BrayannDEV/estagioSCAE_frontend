'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import * as XLSX from 'xlsx';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export default function Cliente() {

    let [listaClientes, setListaClientes] = useState([]);
    useEffect((e) => {
        carregarClientes();
    }, [])

    async function carregarClientes() {
        
        try {
            const result = await httpClient.get("/cliente")
            setListaClientes(result)
      
            let ok = r.status == 201;
      
        } catch (erro) {
            console.log(erro);
        }
    }

    async function excluirCliente(id) {

        if(confirm("Tem certeza que deseja excluir este usuário?")) {
            try {
                const result = await httpClient.delete(`/cliente/${id}`)
                carregarClientes()
          
                let ok = r.status == 201;

          
            } catch (erro) {
                console.log(erro);
            }
            
        }
    }

    async function gerarExcel() {

        const ws = XLSX.utils.json_to_sheet(listaClientes);
        const wb = XLSX.utils.book_new();
    
        XLSX.utils.book_append_sheet(wb, ws, 'Clientes');
        XLSX.writeFile(wb, 'relatorio_clientes.xlsx');
    }

    async function gerarPDF() {

        const pdfDoc = await PDFDocument.create();
        const page = pdfDoc.addPage([600, 800]);
        const { width, height } = page.getSize();
        const fontSize = 12; 
        const margin = 50; 
        const lineHeight = fontSize + 10; 
        const columnWidths = [250, 125, 125];
        const bgColor = rgb(0.87, 0.5, 0.56);
        const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
        const rowColor1 = rgb(1, 0.85, 0.9); // Cor rosa claro para as linhas ímpares 
        const rowColor2 = rgb(1, 0.75, 0.8);
    
        // Adicionando título
        const title = 'Relatório de Clientes'; 
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

        const headers = ['NOME', 'TELEFONE', 'LOGIN']; 
        headers.forEach((header, i) => { 
            page.drawText(header, { 
                x: margin + (i > 0 ? columnWidths.slice(0, i).reduce((a, b) => a + b, 0) : 0), 
                y: height - margin - 2 * lineHeight, 
                size: fontSize, color: rgb(0, 0, 0), 
                font: fontBold,
            }); 
        });
    
        // Adicionando os dados dos clientes
        listaClientes.forEach((cliente, index) => {
    
            const y = height - margin - (index + 3) * lineHeight; // Ajustando o espaçamento vertical 
            const bgColor = index % 2 === 0 ? rowColor1 : rowColor2; // Alternar entre as cores de fundo 
            // Adicionando fundo colorido para as linhas 
            page.drawRectangle({ 
                x: margin, 
                y: y - 12, 
                width: columnWidths.reduce((a, b) => a + b, 0), 
                height: lineHeight + 4, color: bgColor, 
            });

            const dados = [ cliente.nome, cliente.fone, cliente.login ]; 
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
        a.download = 'relatorio_clientes.pdf';
        a.click();
    }

    const [termoBusca, setTermoBusca] = useState(''); 
    const clientesFiltrados = listaClientes.filter(cliente => 
        cliente.nome.toLowerCase().includes(termoBusca.toLowerCase()) 
    );


    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
        
        <div className="table-responsive offset-md-3 col-md-6 text-center">
            <h2 className="display-4 fw-normal mb-3">Listagem de cliente</h2>
            <input type="text" placeholder="Buscar por nome" className="form-control mb-3" value={termoBusca} onChange={(e) => setTermoBusca(e.target.value)} />
            <button onClick={gerarPDF} className="btn btn-outline-primary btn-sm mb-2">Gerar PDF</button>
            <button onClick={gerarExcel} className="btn btn-outline-success btn-sm mb-2">Gerar Excel</button>
            <table className="table table-striped table-bordered table-hover" >
            <thead className="table-active">
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Login</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                {clientesFiltrados.map(cliente => (
                    <tr key={cliente.id}>
                        <td>{cliente.nome}</td>
                        <td>{cliente.fone}</td>
                        <td>{cliente.login}</td>
                        <td>
                            <a className="btn btn-outline-secondary btn-sm mr-2 mb-2" href={`/admin/cliente/alteracao/${cliente.id}`}>Editar</a>
                            <button className="btn btn-outline-danger btn-sm mr-2 mb-2" onClick={() => excluirCliente(cliente.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
            </tbody>
            </table>

        </div>
        </section>


    );

}