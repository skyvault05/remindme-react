import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ScheduleRepository from "../repository/ScheduleRepository";
import axios from "axios";

const myEventsList = [
  { start: new Date(), end: new Date(), title: "special event" },
  { start: new Date(), end: new Date(), title: "special event" },
  { start: new Date(), end: new Date(), title: "special event" },
  { start: new Date(), end: new Date(), title: "special event" },
];

const MyCalendar = () => {
  const locales = {
    ko: require("date-fns/locale/ko"),
  };
  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });
  const [mySchedules, SetMySchedules] = useState({});

  useEffect(() => {
    const scheduleRepository = new ScheduleRepository();
    scheduleRepository.getMySchedules().then((response) => {
      SetMySchedules(response);
    });
  }, []);

  console.log(mySchedules);

  return (
    <div className="MyCalendar">
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
export default MyCalendar;
