import { InputAdornment } from "@mui/material";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import classNames from "classnames";
import React from "react";
import "./styles.scss";

const useStyles = makeStyles({
  root: {
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#000000",
    },
    "& .MuiFilledInput-underline": {
      borderRadius: "4px",
    },
    "& .MuiFilledInput-underline:before": {
      borderBottom: "none",
    },
    "& .MuiFilledInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "none",
    },
    "& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:after": {
      borderBottom: "none",
    },
    "& .css-10i04qz-MuiInputBase-root-MuiFilledInput-root:focus-visible": {
      border: "2px solid #1976d2",
    },
  },
});

export const Input = ({
  onKeyUp,
  startInput,
  className,
  inputClass,
  endInput,
  value,
  variant = "filled",
  label,
  size = "small",
  inputComponent,
  containerStyle,
  inputProps,
  readOnly = false,
  ...rest
}) => {
  const classes = useStyles();

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
        // label={checkLabel()}
        label={label}
        value={value}
        size={size}
        variant={variant}
        className={classNames("item", inputClass, classes.root)}
        inputProps={inputProps}
        InputProps={{
          startAdornment: startInput && (
            <InputAdornment
              position="start"
              sx={{ marginRight: "16px", marginBottom: "4px" }}
            >
              {startInput}
            </InputAdornment>
          ),
          endAdornment: endInput && (
            <InputAdornment position="end">{endInput}</InputAdornment>
          ),
          inputComponent: inputComponent,
          readOnly,
        }}
      />
    </div>
  );
};
