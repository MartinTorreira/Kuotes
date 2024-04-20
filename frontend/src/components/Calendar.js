import React, { useContext, useState, useEffect } from "react";
import { LoginContext } from "./user/LoginContext";
import { Account } from "./user/Account.js";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import useQuoteStore from './store/useQuoteStore';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {

  const [events, setEvents] = useState([]);
  const { quotes } = useQuoteStore();

  useEffect(() => {
    const calendarEvents = quotes.map((quote) => ({
      id: quote.id,
      title: quote.title,
      start: new Date(quote.date),
      end: new Date(quote.endDate),
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
