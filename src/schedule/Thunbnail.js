import { Button } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

import React from "react";

const Thumbnail = (schedule) => {
  return (
    <>
      <img src={schedule.thumbnail} alt="Thumbnail" />
      <Button variant="contained" endIcon={<InsertPhotoIcon />}>
        썸네일 추가
      </Button>
    </>
  );
};

export default Thumbnail;
