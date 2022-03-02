import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import React from "react";
import "./styles.scss";

export const Input = ({
  onKeyUp,
  startInput,
  className,
  inputClass,
  ...rest
}) => {
  return (
    <div className={classNames("input", className)}>
      <TextField
        {...rest}
        fullWidth
        className={classNames("item", inputClass)}
        InputProps={{
          startAdornment: startInput && (
            <InputAdornment position="start">{startInput}</InputAdornment>
          ),
        }}
      />
    </div>
  );
};
