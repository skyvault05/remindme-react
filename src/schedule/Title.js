import Input from "@mui/material/Input";

import React from "react";

const Title = (title) => {
  return (
    <Input
      id="component-helper"
      placeholder="제목 추가..."
      value={title}
      aria-describedby="component-helper-text"
    />
  );
};

export default Title;
