import { FormControl, TextField, Box, Button, Avatar } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";

import React from "react";
import { useState, useEffect } from "react";

import styled from "styled-components";

import ScheduleRepository from "../repository/ScheduleRepository";

const ScheduleDetails = () => {
  const data = {
    image:
      "https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=360",
  };

  const me = {
    nickname: "kimzombie",
    image:
      "//lh3.googleusercontent.com/a/ALm5wu05Of2gxGM1cJv5-vScZ6Z6vkBenwCX6uUdOMfl=s96-c",
  };

  const [schedule, setSchedule] = useState({});
  const [replies, setReplies] = useState({});

  useEffect(() => {
    const scheduleRepository = new ScheduleRepository();
    scheduleRepository.getSchedule(26).then((response) => {
      setSchedule(response);
    });
    scheduleRepository.getReplies(26).then((response) => {
      setReplies(response);
    });
  }, []);

  //   console.log(schedule);
  //   console.log(replies);
  //   console.log(typeof replies);

  const AvatarContainer = styled.div`
    display: flex;
    margin-bottom: 14px;
    & > * {
      margin: 4px;
    }
  `;
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50%" },
        }}
        noValidate
        autoComplete="off"
      >
        {/* 타이틀 */}
        <div>
          <TextField
            id="standard"
            label="Title..."
            defaultValue={"\u00a0"}
            value={schedule.title}
            variant="standard"
          />
        </div>
        {/* 썸네일 */}
        <div>
          <img src={data.image} alt="Thumbnail" />
          <Button variant="contained" endIcon={<InsertPhotoIcon />}>
            썸네일 추가
          </Button>
        </div>
        <div>
          <TextField
            id="outlined-textarea"
            label="Description..."
            placeholder="Description..."
            defaultValue={"\u00a0"}
            value={schedule.description}
            multiline
          />
          {/* 멤버리스트 */}
          <List
            dense
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {[0, 1, 2, 3].map((value) => {
              const labelId = `checkbox-list-secondary-label-${value}`;
              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar
                        alt={`Avatar n°${value + 1}`}
                        src={`/static/images/avatar/${value + 1}.jpg`}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </div>
      </Box>

      {/* 댓글 */}
      <div>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {Object.keys(replies).forEach((reply) => {
            console.log(reply.description);
          })}
          {/* <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              //   primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" /> */}
        </List>
      </div>

      {/* 댓글 등록 */}
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <AvatarContainer>
          <Avatar alt={me.nickname} src={me.image} />
          <TextField
            id="outlined-textarea"
            label="댓글 추가..."
            placeholder="댓글 추가..."
            multiline
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            댓글 입력
          </Button>
        </AvatarContainer>
      </Box>
    </>
  );
};

export default ScheduleDetails;
