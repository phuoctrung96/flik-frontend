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
  endInput,
  value,
  label,
  size = "small",
  inputComponent,
  containerStyle,
  inputProps,
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
    <div className={classNames("input", className)} style={containerStyle}>
      <TextField
        {...rest}
        fullWidth
        label={checkLabel()}
        value={value}
        size={size}
        className={classNames("item", inputClass)}
        inputProps={inputProps}
        InputProps={{
          startAdornment: startInput && (
            <InputAdornment position="start" sx={{ marginRight: "16px" }}>
              {startInput}
            </InputAdornment>
          ),
          endAdornment: endInput && (
            <InputAdornment position="end">{endInput}</InputAdornment>
          ),
          inputComponent: inputComponent,
        }}
      />
    </div>
  );
};
