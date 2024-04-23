import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useQuoteStore from './store/useQuoteStore';
import {getColorByImportance} from '../components/utils/Typography.js';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  
  const [events, setEvents] = useState([]);
  const { quotes, getUserQuotes } = useQuoteStore();
  const [key, setKey] = useState(0);

  useEffect(() => {
    getUserQuotes(JSON.parse(localStorage.getItem("user")).id);
    const calendarEvents = quotes.map((quote) => {
      return {
        id: quote.id,
        title: quote.title,
        start: new Date(quote.date),
        end: new Date(quote.endDate),
        description: quote.description,
        color: getColorByImportance(quote.importance),
      };
    });
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
        eventPropGetter={(event, start, end, isSelected) => ({
          style: {
            backgroundColor: event.color,
            color: '#fff',
            border: 'none',
            opacity: 0.7,
          },
        })}
      />
    </div>
  );
};

export default CalendarComponent;
