import React, { useEffect } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ScheduleRepository from "../repository/ScheduleRepository";

const MyCalendar = () => {
  useEffect(() => {
    const scheduleRepository = new ScheduleRepository();
    scheduleRepository.getMySchedules();
  }, []);

  return (
    <div className="MyCalendar">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            {
              // TODO: 추후에 닉네임 바꾸기 기능 등 회원정보 관련 메뉴 추가
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            }
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              RemindMe
            </Typography>
            {/* TODO: LOGIN/LOGOUT 토글 */}
            {/* TODO: backend> login 이후에 redirect를 localhost:3000으로 되도록 요청 */}
            <Button
              href="http://localhost:8080/oauth2/authorization/google"
              color="inherit"
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {/* <Calendar
        localizer={localizer}
        events={myEventList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      /> */}
    </div>
  );
};
export default MyCalendar;
