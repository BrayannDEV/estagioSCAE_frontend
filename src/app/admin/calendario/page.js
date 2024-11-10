'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'



export default function Agendamento() {

    async function Calendario() {
        var calendarEl = document.getElementById('calendar');
        var calendar = new FullCalendar.Calendario(calendarEl, {
        locale: 'pt-br',
        timeZone: 'America/Sao_Paulo',
        buttonText: {
            today: 'hoje',
            month: 'Mes',
            week: 'Semana',
            day: 'dia',
            list: 'lista'
        },
        initialView: 'dayGridMonth'
        });
        calendar.render();
    }
    

    return(
        <div>
            <div>
                <button className="btn btn-primary mt-3" onClick={Calendario} style={{backgroundColor: "DF808F", border: "none"}}>Ver Calendário</button>
            </div>
            <FullCalendar plugins={[ dayGridPlugin ]} initialView="dayGridMonth" selectable="true"
            events={[
            { title: 'Maria', start: '2024-11-07T08:30:00', end: '2024-11-07T09:30:00', display:'backgroud' },
            { title: 'Julia', date: '2024-11-20' }
            ]}/>
            
        </div>
        
        
    );

}

// function renderEventContent(eventInfo) {
//     return(
//       <>
//         <b>{eventInfo.timeText}</b>
//         <i>{eventInfo.event.title}</i>
//       </>
//     )
//   }