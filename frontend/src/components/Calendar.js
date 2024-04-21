import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useQuoteStore from './store/useQuoteStore';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const { quotes, getUserQuotes } = useQuoteStore();
  const [key, setKey] = useState(0);

  useEffect(() => {
    getUserQuotes(JSON.parse(localStorage.getItem("user")).id);
    const calendarEvents = quotes.map((quote) => ({
      id: quote.id,
      title: quote.title,
      start: new Date(quote.date),
      end: new Date(quote.endDate),
      description: quote.description,
    }));
    setEvents(calendarEvents);
  }, [getUserQuotes, quotes]);

  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [events]);

  return (
    <div className="mt-20 py-10">
      <Calendar
        key={key}
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, width: 700}}
        className={`
        dark:text-gray-200 text-gray-800
        bg-transparent 
        font-base 
      `}
      />
    </div>
  );
};


export default CalendarComponent;
