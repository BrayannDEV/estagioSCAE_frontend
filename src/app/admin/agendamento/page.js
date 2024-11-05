'use client'
import { useRef, useState, useEffect } from "react"
import httpClient from "../../utils/httpClient.js";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export default function Agendamento() {

    return(
        <FullCalendar plugins={[ dayGridPlugin ]} initialView="dayGridMonth" 
         events={[
          { title: 'event 1', date: '2024-11-07' },
          { title: 'event 2', date: '2024-11-20' }
        ]}/>
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