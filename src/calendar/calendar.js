import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ScheduleRepository from "../repository/ScheduleRepository";
import ScheduleMapper from "../mapper/ScheduleMapper";

const MyCalendar = () => {
  const scheduleMapper = new ScheduleMapper();

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
  const [myEventList, setMyEventList] = useState([]);

  useEffect(() => {
    const scheduleRepository = new ScheduleRepository();
    scheduleRepository.getMySchedules().then((response) => {
      scheduleMapper
        .toCalendarSchedule(response)
        .then((eventList) => setMyEventList(eventList));
    });
  }, []);

  return (
    <div className="MyCalendar">
      <Calendar
        localizer={localizer}
        events={myEventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};
export default MyCalendar;
