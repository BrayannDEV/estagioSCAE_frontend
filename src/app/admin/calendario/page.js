'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


export default function Agendamento() {

    

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


    return(
        <div>
            
            <FullCalendar plugins={[ dayGridPlugin, interactionPlugin  ]} initialView="dayGridMonth" selectable="true" 
            events=
            {
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
                        title: agenda.cliente.nome,
                        display: agenda.procedimento.nome,
                        date: agenda.data,
                        start: horaInicial,
                        end: horaFinal
                }})
            }
            eventClick=
            {
                function (info) {
                    alert(`
                        Cliente: ${info.event.title} 
                        Procedimento: ${info.event.display}
                        Início: ${(info.event.start).getHours()}:${String((info.event.start).getMinutes()).padStart(2, '0')}
                        Fim: ${(info.event.end).getHours()}:${String((info.event.end).getMinutes()).padStart(2, '0')}
                    `)
                }
            }
                
            />
            
        </div>
        
        
    );

}
