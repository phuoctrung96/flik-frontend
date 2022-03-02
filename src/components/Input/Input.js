import { InputAdornment } from "@mui/material";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import React, { useMemo } from "react";
import "./styles.scss";

export const Input = ({
  onKeyUp,
  startInput,
  className,
  inputClass,
  endInput,
  value,
  label,
  ...rest
}) => {
  const checkLabel = () => {
    if (startInput) {
      if (!!value) return label;
      return "";
    }
    return label;
  };

  return (
    <div className={classNames("input", className)}>
      <TextField
        {...rest}
        fullWidth
        label={checkLabel()}
        value={value}
        className={classNames("item", inputClass)}
        InputProps={{
          startAdornment: startInput && (
            <InputAdornment position="start" sx={{ marginRight: "16px" }}>
              {startInput}
            </InputAdornment>
          ),
          endAdornment: endInput && (
            <InputAdornment position="end">{endInput}</InputAdornment>
          ),
        }}
      />
    </div>
  );
};
