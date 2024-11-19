'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import * as XLSX from 'xlsx';
import { PDFDocument, rgb } from 'pdf-lib';

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
        const page = pdfDoc.addPage([600, 400]);
        const { width, height } = page.getSize();
    
        // Adicionando título
        page.drawText('Relatório de Clientes', {
            x: 50,
            y: height - 50,
            size: 30,
            color: rgb(0, 0, 0),
        });
    
        // Adicionando os dados dos clientes
        listaClientes.forEach((cliente, index) => {
    
            const text = `${cliente.nome} | Telefone: ${cliente.fone} | Login: ${cliente.login}`;
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
        a.download = 'relatorio_clientes.pdf';
        a.click();
    }


    return(
        <section id="appointment" className="jarallax" style={{backgroundImage: "url(../../images/background-1.jpg)"}} >
        {/* style="background-image: url(images/background-1.jpg); background-repeat: no-repeat; background-position: center;" */}
        <div className="table-responsive offset-md-3 col-md-6 text-center">
            <h2 className="display-4 fw-normal mb-3">Listagem de cliente</h2>
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
                {listaClientes.map(cliente => (
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