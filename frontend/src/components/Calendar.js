import React, { useContext, useState, useEffect } from "react";
import { LoginContext } from "./user/LoginContext";
import { Account } from "./user/Account.js";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useQuoteStore from './store/useQuoteStore';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
    const { token } = useContext(LoginContext);
    const [events, setEvents] = useState([]);
    const { quotes } = useQuoteStore();

    const data = [
        {
          id: 1,
          title: 'Reunión con el equipo',
          start: new Date('2024-04-20T10:00:00'),
          end: new Date('2024-04-20T12:00:00'),
          description: 'Reunión semanal con el equipo para discutir los progresos del proyecto.',
        },
        {
          id: 2,
          title: 'Entrevista de trabajo',
          start: new Date('2024-04-21T14:00:00'),
          end: new Date('2024-04-21T16:00:00'),
          description: 'Entrevista con un candidato para el puesto de desarrollador frontend.',
        },
        {
          id: 3,
          title: 'Capacitación de React',
          start: new Date('2024-04-22T09:00:00'),
          end: new Date('2024-04-22T17:00:00'),
          description: 'Capacitación sobre los fundamentos de React para el equipo de desarrollo.',
        },
    ];
    
    useEffect(() => {
        // Transformar citas en eventos para el calendario
        const calendarEvents = quotes.map((quote) => ({
          id: quote.id,
          title: quote.title,
          start: new Date(quote.date),
          end: new Date(quote.date), 
          description: quote.description,
        }));
    
        setEvents(calendarEvents);
      }, [quotes]);
    
      

    return (
        <div className="mt-20 py-10">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                className="dark:text-gray-200 text-gray-800"
            />
        </div>
    );
};


export default CalendarComponent;
