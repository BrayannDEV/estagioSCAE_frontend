'use client'
import { useRef, useState, useEffect } from "react";
import httpClient from "../../utils/httpClient.js";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import { Modal, Button } from 'react-bootstrap';
import { useAuth } from "../../context/userContext.js";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

export default function Agendamento() {

    let [showModal, setShowModal] = useState(false); 
    let [modalInfo, setModalInfo] = useState({});

    let [listaAgenda, setListaAgenda] = useState([]);
    useEffect((e) => {
      carregarAgenda();
    }, [])

    async function carregarAgenda() {
        
        try {
          const result = await httpClient.get(`/agenda`)    
          console.log(result);   
          setListaAgenda(result)        
      
        }catch (erro) {
          console.log(erro);
        }
    }

    async function excluirAgendamento(id) {

        if(confirm("Tem certeza que deseja excluir este agendamento?")) {
            try {
                const result = await httpClient.delete(`/agenda/${id}`)
                //let ok = r.status == 201;
                alert("Exclusão feita com sucesso!");
                carregarAgenda();
                setShowModal(false);
            } catch (erro) {
                console.log(erro);
            }
            
        }
    }

    function handleEventClick(info) { 
        setModalInfo({ 
            id: info.event.extendedProps.id,
            title: info.event.title, 
            procedimento: info.event.extendedProps.procedimento,
            inicio: `${info.event.start.getHours()}:${String(info.event.start.getMinutes()).padStart(2, '0')}`, 
            fim: `${info.event.end.getHours()}:${String(info.event.end.getMinutes()).padStart(2, '0')}` 
        }); 
        setShowModal(true); 
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
            <div className="d-flex justify-content-end p-3">
                <button className="btn btn-primary mt-3" onClick={handleDownloadPDF} style={{backgroundColor: "green", border: "none"}}>Ajuda</button>
                <button className="btn btn-primary mt-3" onClick={handleLogout}  style={{backgroundColor: "maroon", border: "none"}}>Sair</button>
            </div>
            <FullCalendar 
            plugins={[ dayGridPlugin, interactionPlugin  ]} 
            initialView="dayGridMonth" 
            selectable="true" 
            locale={ptBrLocale}
            events={
                listaAgenda.map(agenda =>{

                    let horaInicial = new Date(agenda.data);
                    let [horas, minutos, segundos] = agenda.horaInicial.split(':');
                    horaInicial.setHours(horas);
                    horaInicial.setMinutes(minutos);
                    horaInicial.setSeconds(segundos);

                    let horaFinal = new Date(agenda.data);
                    let [horasfinal, minutosfinal, segundosfinal] = agenda.horaFinal.split(':');
                    horaFinal.setHours(horasfinal);
                    horaFinal.setMinutes(minutosfinal);
                    horaFinal.setSeconds(segundosfinal);
                    

                    return {
                        id: agenda.id,
                        title: agenda.cliente.nome,
                        procedimento: agenda.procedimento.nome,
                        date: agenda.data,
                        start: horaInicial,
                        end: horaFinal,
                        extendedProps: { 
                            id: agenda.id, 
                            procedimento: agenda.procedimento.nome
                        }
                }})
            }
            eventTimeFormat={{ 
                hour: '2-digit', 
                minute: '2-digit', 
                hour12: false // Configura para usar a notação de 24 horas 
            }}
            eventClick={handleEventClick}
        />
        <Modal show={showModal} onHide={() => setShowModal(false)}> 
            <Modal.Header closeButton> 
                <Modal.Title>Detalhes do Agendamento</Modal.Title> 
            </Modal.Header> 
            <Modal.Body> 
                <p><strong>Cliente:</strong> {modalInfo.title}</p> 
                <p><strong>Procedimento:</strong> {modalInfo.procedimento}</p> 
                <p><strong>Início:</strong> {modalInfo.inicio}</p> 
                <p><strong>Fim:</strong> {modalInfo.fim}</p> 
            </Modal.Body> 
            <Modal.Footer> 
                <Button variant="secondary" onClick={() => setShowModal(false)}> Fechar </Button> 
                <Button variant="danger" onClick={() => excluirAgendamento(modalInfo.id)}> Excluir </Button> 
            </Modal.Footer> 
        </Modal>
        </div>
    );
}
