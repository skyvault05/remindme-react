import React from "react";
import {
  FormControl,
  TextField,
  Box,
  Button,
  CardHeader,
  Avatar,
} from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import styled from "styled-components";

const ScheduleDetails = () => {
  const AvatarContainer = styled.div`
    display: flex;
    margin-bottom: 14px;
    & > * {
      margin: 4px;
    }
  `;
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="filled-search"
          label="Title"
          type="search"
          variant="filled"
        />
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/159045/the-interior-of-the-repair-interior-design-159045.jpeg?auto=compress&cs=tinysrgb&w=360"
          alt="Thumbnail"
        ></img>
        <Button variant="contained" endIcon={<InsertPhotoIcon />}>
          썸네일 추가
        </Button>
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
      </div>
      <div>
        <TextField
          id="outlined-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
        />
      </div>
      <div>
        <AvatarContainer>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <TextField />
        </AvatarContainer>
      </div>
    </Box>
  );
};

export default ScheduleDetails;
