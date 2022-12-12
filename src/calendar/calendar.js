import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ScheduleRepository from "../repository/ScheduleRepository";
import ScheduleMapper from "../mapper/ScheduleMapper";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

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
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RemindMe
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
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
