import classNames from "classnames";
import React from "react";
import TextField from "@mui/material/TextField";

export const Input = (...rest) => {
  return (
    <div className={classNames("input")}>
      <TextField {...rest} />
    </div>
  );
};
